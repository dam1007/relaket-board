'use server';

import knex from '@/lib/knex';
import { redirect } from 'next/navigation';
import path from 'path';
import fs from 'fs/promises';
import { getSession } from '@/lib/redis';

export async function likePostAction(postId: number) {
  await knex('relaket_post')
    .where({ id: postId })
    .increment('like_count', 1);
}

export async function deletePostAction(formData: FormData) {
  const postId = formData.get('postId') as string;
  
  if (!postId) {
    throw new Error('게시글 ID가 없습니다.');
  }

  // 로그인 체크
  const loginUser = await getSession('user');
  if (!loginUser) {
    throw new Error('로그인이 필요합니다.');
  }

  // 게시글 조회 및 소유자 체크
  const post = await knex('relaket_post').where({ id: Number(postId) }).first();
  if (!post) {
    throw new Error('게시글을 찾을 수 없습니다.');
  }

  if (post.user_id !== loginUser.userId) {
    throw new Error('삭제 권한이 없습니다.');
  }

  // 첨부파일 조회 및 삭제
  const files = await knex('relaket_file').where({ post_id: Number(postId) });
  for (const file of files) {
    // 실제 파일 삭제
    const filePath = path.join(process.cwd(), 'public', file.file_path);
    try {
      await fs.unlink(filePath);
    } catch (error) {
      console.error('파일 삭제 실패:', error);
    }
  }

  // DB에서 첨부파일 삭제
  await knex('relaket_file').where({ post_id: Number(postId) }).del();

  // 게시글 삭제
  await knex('relaket_post').where({ id: Number(postId) }).del();

  redirect('/board/list');
} 