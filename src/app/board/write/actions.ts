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
  // 실제 서비스라면 로그인한 user_id를 세션에서 가져와야 함
  const loginUser = await getSession('user');
  if (!loginUser) {
    throw new Error('로그인 필요');
  }
  const user_id = loginUser.userId;

  // 게시글 저장
  const [postId] = await knex('relaket_post').insert({
    user_id,
    title,
    content,
  });

  // 파일 업로드 처리
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

  redirect('/board/list');
} 