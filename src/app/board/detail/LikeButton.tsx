'use client';

import { useState, useTransition } from 'react';
import { likePostAction } from './actions';
import { BiSolidLike } from "react-icons/bi";
import { likeButton } from '@/styles/components.css';

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
      className={likeButton}
      onClick={handleLike}
      disabled={isPending}
    >
      <BiSolidLike /> 
      좋아요 <strong>{likeCount}</strong>
    </button>
  );
} 