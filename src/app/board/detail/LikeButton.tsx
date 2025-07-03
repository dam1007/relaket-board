'use client';

import { useState, useTransition, useEffect } from 'react';
import { likePostAction } from './actions';

interface LikeButtonProps {
  postId: number;
  initialCount: number;
  isLoggedIn: boolean;
  userId?: number;
}

export default function LikeButton({ postId, initialCount, isLoggedIn, userId }: LikeButtonProps) {
  const [likeCount, setLikeCount] = useState(initialCount);
  const [isPending, startTransition] = useTransition();
  const [liked, setLiked] = useState(false);

  // 최초 렌더링 시 서버에서 좋아요 여부를 받아옴
  useEffect(() => {
    if (isLoggedIn && userId) {
      fetch(`/api/post/${postId}/is-liked?userId=${userId}`)
        .then(res => res.json())
        .then(data => setLiked(!!data.liked));
    }
  }, [isLoggedIn, userId, postId]);

  const handleLike = () => {
    if (!isLoggedIn) {
      if (confirm('로그인한 회원만 좋아요를 누를 수 있습니다.\n로그인 하시겠습니까?')) {
        window.location.href = '/member/login';
      }
      return;
    }
    startTransition(async () => {
      const toggled = await likePostAction(postId, liked);
      setLiked(!liked);
      setLikeCount((prev) => prev + (toggled ? -1 : 1));
    });
  };

  return (
    <button
      type="button"
      onClick={handleLike}
      disabled={isPending}
      style={{ fontWeight: 'bold', fontSize: '1.1em', cursor: isLoggedIn ? 'pointer' : 'not-allowed', color: liked ? 'red' : undefined }}
    >
      👍 좋아요 {likeCount}
    </button>
  );
} 