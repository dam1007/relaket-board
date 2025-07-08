import { NextRequest, NextResponse } from 'next/server';
import knex from '@/lib/knex';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postId = Number(id);
  const { searchParams } = new URL(request.url);
  const userId = Number(searchParams.get('userId'));

  if (isNaN(postId) || isNaN(userId)) {
    return NextResponse.json({ error: 'Invalid postId or userId' }, { status: 400 });
  }

  try {
    const likeRow = await knex('relaket_post_like')
      .where({ post_id: postId, user_id: userId })
      .first();

    return NextResponse.json({ isLiked: !!likeRow });
  } catch (error) {
    console.error('Error checking like status:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 