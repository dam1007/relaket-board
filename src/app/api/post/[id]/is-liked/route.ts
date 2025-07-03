import { NextRequest, NextResponse } from 'next/server';
import knex from '@/lib/knex';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const postId = Number(params.id);
  const { searchParams } = new URL(request.url);
  const userId = Number(searchParams.get('userId'));

  if (!postId || !userId) {
    return NextResponse.json({ liked: false });
  }

  const likeRow = await knex('relaket_post_like').where({ post_id: postId, user_id: userId }).first();
  return NextResponse.json({ liked: !!likeRow });
} 