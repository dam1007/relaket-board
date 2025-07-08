// 댓글 영역
'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation'; // useRouter import 추가
import * as board from "../board.css";
import Profile from "@/components/Profile/Profile";
import { buttonWrapLeft, buttonWrapBetween, button } from '@/styles/components.css';
import LikeButton from "./LikeButton";
import CommentLengthCheck from "./CommentLengthCheck";
import { addCommentAction } from './actions';

interface CommentProps {
    postId: number;
    initialCount: number;
    isLoggedIn: boolean;
    loginUser: any; // loginUser 타입은 실제 세션 데이터에 맞게 조정 필요
    userId?: number;
    comments: CommentData[]; // Added comments prop
}

interface CommentData { // Added CommentData interface
  id: number;
  post_id: number;
  user_id: string;
  parent_id: number | null;
  content: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

interface CommentData {
  id: number;
  post_id: number;
  user_id: string;
  parent_id: number | null;
  content: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export default function Comment({ postId, initialCount, isLoggedIn, loginUser, userId, comments }: CommentProps) {
    const router = useRouter(); // useRouter 훅 사용
    const [commentContent, setCommentContent] = useState('');
    const [applyToggle, setApplyToggle] = useState(false);

    const handleCreateComment = async () => {
        if (!isLoggedIn) {
            if (window.confirm('로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?')) {
                router.push('/member/login');
            }
            return;
        }

        try {
            await addCommentAction(postId, commentContent, null);
            setCommentContent(''); // 댓글 작성 후 입력 필드 초기화
            window.location.reload(); // 페이지 새로고침으로 댓글 목록 갱신
        } catch (error: any) {
            console.error('Error in handleCreateComment:', error);
            alert(error.message);
        }
    };

    // 답글 등록
    const toggleCommentApply = () => {
        setApplyToggle(!applyToggle);
        setReplyContent(''); // 답글 입력 필드 초기화
    };

    const handleCreateReply = async (parentId: number) => {
        if (!isLoggedIn) {
            if (window.confirm('로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?')) {
                router.push('/member/login');
            }
            return;
        }

        try {
            await addCommentAction(postId, replyContent, parentId);
            setReplyContent(''); // 답글 작성 후 입력 필드 초기화
            setApplyToggle(false); // 답글 입력 필드 닫기
            window.location.reload(); // 페이지 새로고침으로 댓글 목록 갱신
        } catch (error: any) {
            console.error('Error in handleCreateReply:', error);
            alert(error.message);
        }
    };

    return (
        <section className={board.commentArea}>
            <form name="">
                {/* 댓글 총 카운트 */}
                <dl className={board.commentCountWrap}>
                    <dt className={board.commentCountTitle}>댓글</dt>
                    <dd className={board.commentCountDesc}>{comments.length}</dd>
                </dl>

                {/* 댓글 작성 영역 */}
                <div className={board.commentWriteWrap}>
                    <CommentLengthCheck 
                        name="comment" 
                        id="comment" 
                        initialValue={commentContent} 
                        maxLength="3000" 
                        placeholder={isLoggedIn ? "댓글을 작성해주세요." : "댓글을 작성하려면 로그인 해주세요."}
                        onChange={setCommentContent}
                    />
                    <div className={buttonWrapBetween} style={{marginTop: '10px'}}>
                        <div className={buttonWrapLeft} style={{gap: '4px'}}>
                            
                        </div>
                        <button
                            type="button" 
                            className={button({type: 'white', size: 'medium'})}
                            onClick={handleCreateComment}
                            disabled={commentContent.trim() === ''}
                        >
                            등록
                        </button>
                    </div>
                </div>

                {/* 댓글 리스트 영역 */}
                <ul className={board.commentList}>
                    {comments.map(comment => (
                        <li key={comment.id} className={board.commentItem}>
                            <div className={board.commentHeader}>
                                <Profile userId={comment.user_id} alt={`${comment.user_id}의 프로필 이미지`} />
                                <div className={buttonWrapLeft} style={{gap: '4px'}}>
                                    <button type="button" className={button({type: 'white', size: 'small'})}>수정</button>
                                    <button type="button" className={button({type: 'white', size: 'small'})}>삭제</button>
                                </div>
                            </div>
                            <p className={board.commentDesc}>{comment.content}</p>
                            <span className={board.commentDate}>{new Date(comment.created_at).toLocaleString()}</span>
                            <div className={buttonWrapBetween} style={{marginTop: '10px'}}>
                                <button 
                                    type="button" 
                                    className={button({type: 'transparent', size: 'small'})} 
                                    onClick={toggleCommentApply}
                                >
                                    답글
                                </button>
                                <LikeButton 
                                    entityId={comment.id} 
                                    entityType={'comment'} 
                                    initialCount={initialCount ?? 0} 
                                    isLoggedIn={!!loginUser}
                                    userId={loginUser?.userId}
                                    size={'small'}
                                />
                            </div>

                            {/* 답글 작성 영역 */}
                            {applyToggle ? 
                            <div className={board.commentWriteWrap}>
                                <CommentLengthCheck 
                                    name="commentApply" 
                                    id="commentApply" 
                                    initialValue="" 
                                    maxLength="3000" 
                                    placeholder="댓글을 작성하려면 로그인 해주세요." 
                                />
                                <div className={buttonWrapBetween} style={{marginTop: '10px'}}>
                                    <button
                                        type="button" 
                                        className={button({type: 'white', size: 'medium'})}
                                        onClick={createComment}>
                                        등록
                                    </button>
                                </div>
                            </div>
                            : null
                            }
                        </li>
                    ))}
                </ul>
            </form>
        </section>
    );
};