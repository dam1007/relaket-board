// 게시판 상세

import Link from "next/link";
import * as board from "../board.css";
import { hoverUnderline, buttonWrapRight, button } from '@/styles/components.css';
import knex from '@/lib/knex';
import { notFound } from 'next/navigation';
import LikeButton from './LikeButton';
import DOMPurify from 'isomorphic-dompurify';
import Comment from "./Comment";
import { getSession } from '@/lib/redis';
import { deletePostAction } from './actions';
import DeleteButton from './DeleteButton';

interface DetailProps {
    searchParams: Promise<{ id?: string }>;
}

export default async function Page({ searchParams }: DetailProps) {
    const { id } = await searchParams;
    const numId = Number(id);
    if (!numId) return notFound();

    // 조회수 증가
    await knex('relaket_post').where({ id: numId }).increment('view_count', 1);

    // 게시글 조회
    const post = await knex('relaket_post').where({ id: numId }).first();
    if (!post) return notFound();

    // 첨부파일 조회
    const files = await knex('relaket_file').where({ post_id: numId });

    // 현재 로그인 유저 정보 조회 (UI 표시용)
    const loginUser = await getSession('user');
    const isOwner = loginUser && post.user_id === loginUser.userId;

    // 댓글 조회
    const comments: CommentData[] = await knex('relaket_comment')
      .where({ post_id: numId, parent_id: null })
      .andWhere('deleted_at', null)
      .orderBy('created_at', 'desc');

    return (
        <>
            <div className={board.writeBox}>
                <div className={board.writeBoxHeader}>
                    <h3 className={board.writeBoxTitle}>{post.title}</h3>
                    <div className={board.writeBoxInfoWrap}>
                      <ul className={board.writeBoxInfoList}>
                        <li className={`${board.writeBoxInfoListItem} ${board.seperate}`}>
                          <span>{'작성자'}</span>
                          <span className={board.writeBoxUserIP}>({'IP'})</span>
                        </li>
                        <li className={board.writeBoxInfoListItem}>
                          <span className={board.writeBoxRegistDate}>{post.created_at?.toLocaleString() ?? ''}</span>
                          
                        </li>
                      </ul>
                      <ul className={board.writeBoxInfoList}>
                        <li className={`${board.writeBoxInfoListItem}`}>
                          조회수 <b className={board.writeBoxInfoListCount}>{post.view_count ?? 0}</b>
                        </li>
                        <li className={`${board.writeBoxInfoListItem}`}>
                          좋아요 <b className={board.writeBoxInfoListCount}>{post.like_count ?? 0}</b>
                        </li>
                        <li className={`${board.writeBoxInfoListItem}`}>
                          댓글 <b className={board.writeBoxInfoListCount}>{post.comment_count ?? 0}</b>
                        </li>
                      </ul>
                    </div>
                </div>
                <div className={board.writeBoxBody}>
                    <div className={board.writeBoxTextWrap}>
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize((post.content).toString()) }}></div>
                    </div>
                    {files.length > 0 && (
                        <dl className={board.writeBoxFileWrap}>
                            <dt className={board.writeBoxFileTitle}>첨부파일</dt>
                            <dd>
                                {files.map(file => (
                                    <div key={file.id}>
                                        <Link href={`/api/file/${file.id}/download`} className={hoverUnderline} download>{file.file_name}</Link>
                                    </div>
                                ))}
                            </dd>
                        </dl>
                    )}
                </div>
            </div>
            <div style={{ margin: '20px 0', textAlign: 'right' }}>
                <LikeButton entityId={post.id} entityType={'post'} initialCount={post.like_count ?? 0} isLoggedIn={!!loginUser} userId={loginUser?.userId} size={'large'} />
            </div>
            <div className={buttonWrapRight} style={{ marginTop: '20px', gap: '10px' }}>
                <Link href={'/board/list'} className={button({ type: 'white', size: 'large' })}>목록</Link>
                {isOwner && (
                    <>
                        <Link href={`/board/write?type=update&id=${post.id}`} className={button({ type: 'primary', size: 'large' })}>수정</Link>
                        <DeleteButton postId={post.id} />
                    </>
                )}
            </div>
            
            {/* 댓글영역 */}
            <Comment postId={post.id} initialCount={post.like_count ?? 0} loginUser={loginUser} isLoggedIn={!!loginUser} userId={loginUser?.userId} comments={comments} />
        </>
    );
};

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