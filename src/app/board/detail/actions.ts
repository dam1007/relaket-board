'use server';

import knex from '@/lib/knex';

export async function likePostAction(postId: number) {
  await knex('relaket_post')
    .where({ id: postId })
    .increment('like_count', 1);
} 