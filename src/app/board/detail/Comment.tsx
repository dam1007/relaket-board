// 댓글 영역
'use client'

import { useState } from "react";
import * as board from "../board.css";
import Profile from "@/components/Profile/Profile";
import { buttonWrapLeft, buttonWrapBetween, button } from '@/styles/components.css';
import LikeButton from "./LikeButton";
import CommentLengthCheck from "./CommentLengthCheck";

interface CommentLikeButtonProps {
    postId: number;
    initialCount: number;
    isLoggedIn: boolean;
    loginUser: string;
    userId?: number;
}

export default function Comment({ postId, initialCount, isLoggedIn, loginUser, userId }: CommentLikeButtonProps) {
    const [applyToggle, setApplyToggle] = useState(false);

    // 댓글 등록
    const createComment = () => {
    };

    // 답글 등록
    const toggleCommentApply = () => {
        setApplyToggle(!applyToggle);
    };

    return (
        <section className={board.commentArea}>
            <form action="" name="">
                {/* 댓글 총 카운트 */}
                <dl className={board.commentCountWrap}>
                    <dt className={board.commentCountTitle}>댓글</dt>
                    <dd className={board.commentCountDesc}>0</dd>
                </dl>

                {/* 댓글 작성 영역 */}
                <div className={board.commentWriteWrap}>
                    <CommentLengthCheck 
                        name="comment" 
                        id="comment" 
                        initialValue="" 
                        maxLength="3000" 
                        placeholder="댓글을 작성하려면 로그인 해주세요." 
                    />
                    <div className={buttonWrapBetween} style={{marginTop: '10px'}}>
                        <div className={buttonWrapLeft} style={{gap: '4px'}}>
                            
                        </div>
                        <button
                            type="button" 
                            className={button({type: 'white', size: 'medium'})}
                            onClick={createComment}
                        >
                            등록
                        </button>
                    </div>
                </div>

                {/* 댓글 리스트 영역 */}
                <ul className={board.commentList}>
                    <li className={board.commentItem}>
                        <div className={board.commentHeader}>
                            <Profile />
                            <div className={buttonWrapLeft} style={{gap: '4px'}}>
                                <button type="button" className={button({type: 'white', size: 'small'})}>수정</button>
                                <button type="button" className={button({type: 'white', size: 'small'})}>삭제</button>
                            </div>
                        </div>
                        <p className={board.commentDesc}>댓글내용</p>
                        <span className={board.commentDate}>2025.7.6 16:11</span>
                        <div className={buttonWrapBetween} style={{marginTop: '10px'}}>
                            <button 
                                type="button" 
                                className={button({type: 'transparent', size: 'small'})} 
                                onClick={toggleCommentApply}
                            >
                                답글
                            </button>
                            <LikeButton 
                                postId={postId} 
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

                    {/* 대댓글 */}
                    <li className={`${board.commentItem} ${board.commentApplyItem}`}>
                        <div className={board.commentHeader}>
                            <Profile />
                            <div className={buttonWrapLeft} style={{gap: '4px'}}>
                                <button type="button" className={button({type: 'white', size: 'small'})}>수정</button>
                                <button type="button" className={button({type: 'white', size: 'small'})}>삭제</button>
                            </div>
                        </div>
                        <p className={board.commentDesc}>대댓글내용</p>
                        <span className={board.commentDate}>2025.7.6 16:11</span>
                        <div className={buttonWrapBetween} style={{marginTop: '10px'}}>
                            <button 
                                type="button" 
                                className={button({type: 'transparent', size: 'small'})} 
                                onClick={toggleCommentApply}>
                                답글
                            </button>
                            <LikeButton 
                                postId={postId} 
                                initialCount={initialCount ?? 0} 
                                isLoggedIn={!!loginUser} 
                                userId={loginUser?.userId} 
                                size={'small'} 
                            />
                        </div>

                    {/* 답글 작성 영역 */}
                    {applyToggle && (
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
                                    onClick={createComment}
                                >
                                    등록
                                </button>
                            </div>
                        </div>
                    )}
                    </li>

                    {/* 대대댓글 */}
                    {/* DEV TODO : 대대댓글 시 디자인은 대댓글과 동일하고 타겟 대댓글 Id가 알파멘션 됨 */}
                    <li className={`${board.commentItem} ${board.commentApplyItem}`}>
                        <div className={board.commentHeader}>
                            <Profile />
                            <div className={buttonWrapLeft} style={{gap: '4px'}}>
                                <button type="button" className={button({type: 'white', size: 'small'})}>수정</button>
                                <button type="button" className={button({type: 'white', size: 'small'})}>삭제</button>
                            </div>
                        </div>
                        <p className={board.commentDesc}>
                            <a href="javascript:void(0)"></a>{' '}
                            대대댓글내용
                        </p>
                        <span className={board.commentDate}>2025.7.6 16:11</span>
                        <div className={buttonWrapBetween} style={{marginTop: '10px'}}>
                            <button 
                                type="button" 
                                className={button({type: 'transparent', size: 'small'})} 
                                onClick={toggleCommentApply}
                            >
                                답글
                            </button>
                            <LikeButton 
                                postId={postId} 
                                initialCount={initialCount ?? 0} 
                                isLoggedIn={!!loginUser} 
                                userId={loginUser?.userId} 
                                size={'small'} 
                            />
                        </div>

                    {/* 답글 작성 영역 */}
                    {applyToggle && (
                        <div className={board.commentWriteWrap}>
                            <CommentLengthCheck 
                                name="commentApply" 
                                id="commentApply" 
                                initialValue="" 
                                maxLength="3000" 
                                placeholder="댓글을 작성하려면 로그인 해주세요." 
                            />
                            <div className={buttonWrapBetween} style={{marginTop: '10px'}}>
                                <div className={buttonWrapLeft}>
                                    
                                </div>
                                <button
                                    type="button" 
                                    className={button({type: 'white', size: 'medium'})}
                                    onClick={createComment}
                                >
                                    등록
                                </button>
                            </div>
                        </div>
                    )}
                    </li>
                </ul>
            </form>
        </section>
    );
};