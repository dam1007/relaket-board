'use client';

import { useState, useTransition } from 'react';
import { likePostAction } from './actions';

export default function LikeButton({ postId, initialCount }: { postId: number, initialCount: number }) {
  const [likeCount, setLikeCount] = useState(initialCount);
  const [isPending, startTransition] = useTransition();

  const handleLike = () => {
    startTransition(async () => {
      await likePostAction(postId);
      setLikeCount((prev) => prev + 1);
    });
  };

  return (
    <button
      type="button"
      onClick={handleLike}
      disabled={isPending}
      style={{ fontWeight: 'bold', fontSize: '1.1em', cursor: 'pointer' }}
    >
      👍 좋아요 {likeCount}
    </button>
  );
} 