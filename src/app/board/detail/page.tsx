// 게시판 상세

import Link from "next/link";
import * as board from "../board.css";
import { hoverUnderline, buttonWrapRight, button } from '@/styles/components.css';
import knex from '@/lib/knex';
import { notFound } from 'next/navigation';
import LikeButton from './LikeButton';

interface DetailProps {
  searchParams: Promise<{ id?: string }>;
}

export default async function Page({ searchParams }: DetailProps) {
  const { id } = await searchParams;
  const numId = Number(id);
  if (!numId) return notFound();

  // 게시글 조회
  const post = await knex('relaket_post').where({ id: numId }).first();
  if (!post) return notFound();

  // 첨부파일 조회
  const files = await knex('relaket_file').where({ post_id: numId });

  return (
    <>
      <div className={board.writeBox}>
        <div className={board.writeBoxHeader}>
          <h3 className={board.writeBoxTitle}>{post.title}</h3>
          <span className={board.writeBoxDate}>{post.created_at?.toISOString().slice(0, 10) ?? ''}</span>
        </div>
        <div className={board.writeBoxBody}>
          <div className={board.writeBoxTextWrap}>
            <p>{post.content}</p>
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
        <LikeButton postId={post.id} initialCount={post.like_count ?? 0} />
      </div>
      <div className={buttonWrapRight} style={{marginTop: '30px', gap: '10px'}}>
        <Link href={'/board/list'} className={button({type: 'white', size: 'large'})}>목록</Link>
        <Link href={`/board/write?type=update&id=${post.id}`} className={button({type: 'primary', size: 'large'})}>수정</Link>
      </div>
    </>
  );
};