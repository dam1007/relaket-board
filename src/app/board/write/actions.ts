'use server';

import knex from '@/lib/knex';
import { redirect } from 'next/navigation';
import path from 'path';
import fs from 'fs/promises';
import crypto from 'crypto';
import { getSession } from '@/lib/redis';

export async function writePostAction(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const id = formData.get('id');
  // 실제 서비스라면 로그인한 user_id를 세션에서 가져와야 함
  const loginUser = await getSession('user');
  if (!loginUser) {
    throw new Error('로그인 필요');
  }
  const user_id = loginUser.userId;

  let postId: number;
  if (id) {
    // 수정 - 소유자 체크
    const post = await knex('relaket_post').where({ id: Number(id) }).first();
    if (!post) {
      throw new Error('게시글을 찾을 수 없습니다.');
    }
    if (post.user_id !== user_id) {
      throw new Error('수정 권한이 없습니다.');
    }
    
    await knex('relaket_post')
      .where({ id: Number(id), user_id })
      .update({ title, content });
    postId = Number(id);
  } else {
    // 새 글 작성
    [postId] = await knex('relaket_post').insert({
      user_id,
      title,
      content,
    });
  }

  // 파일 업로드 처리 (수정 시에도 동일하게 동작)
  const file = formData.get('fileUpload') as File | null;
  if (file && typeof file === 'object' && 'name' in file && file.size > 0) {
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await fs.mkdir(uploadDir, { recursive: true });

    // 고유 파일명 생성 (암호화)
    const ext = path.extname(file.name);
    const saveName = `${crypto.randomUUID()}${ext}`;
    const savePath = path.join(uploadDir, saveName);

    // 파일 저장
    const arrayBuffer = await file.arrayBuffer();
    await fs.writeFile(savePath, Buffer.from(arrayBuffer));

    // DB에 파일 정보 저장
    await knex('relaket_file').insert({
      post_id: postId,
      file_name: file.name,
      file_path: `/uploads/${saveName}`,
      file_size: file.size,
    });
  }

  // 첨부파일 삭제 처리
  const deleteFileIds = formData.getAll('deleteFileIds');
  if (deleteFileIds && deleteFileIds.length > 0) {
    for (const fileId of deleteFileIds) {
      const file = await knex('relaket_file').where({ id: Number(fileId), post_id: postId }).first();
      if (file) {
        // 실제 파일 삭제
        const filePath = path.join(process.cwd(), 'public', file.file_path);
        try { await fs.unlink(filePath); } catch {}
        // DB에서 삭제
        await knex('relaket_file').where({ id: Number(fileId) }).del();
      }
    }
  }

  if (id) {
    redirect(`/board/detail?id=${postId}`);
  } else {
    redirect('/board/list');
  }
} 