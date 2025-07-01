// 게시판 리스트
import Link from 'next/link';
import { flex, button, tableCol, tableColTh, tableColTd, tableEmptyList, searchBox, searchBoxInput, searchBoxButton, select, ellipsisOneLine, hoverUnderline } from '@/styles/components.css';
import Pagination from '@/components/Pagination/Pagination';
import knex from '@/lib/knex';

interface ListProps {
  searchParams: { page?: string };
}

export default async function Page({ searchParams }: ListProps) {
  const pageSize = 10;
  const page = Math.max(Number(searchParams.page) || 1, 1);

  // 전체 게시글 수
  const [{ count }] = await knex('relaket_post').count<{ count: number }[]>({ count: '*' });
  const totalCount = Number(count);
  const totalPages = Math.ceil(totalCount / pageSize);

  // 게시글 목록
  const posts = await knex('relaket_post')
    .select('*')
    .orderBy('id', 'desc')
    .limit(pageSize)
    .offset((page - 1) * pageSize);

  return (
    <>
      <div className={flex({type: 'end_center'})} style={{gap: '4px', marginBottom: '20px'}}>
        <div className={searchBox}>
          <select name="" id="" className={select} style={{flexShrink: '0', width: '90px'}}>
            <option value="">전체</option>
            <option value="">제목</option>
            <option value="">내용</option>
          </select>
          <input type="text" name="" id="" className={searchBoxInput} placeholder="검색어를 입력해주세요." />
          <button type="button" className={searchBoxButton}>검색</button>
        </div>
        <select name="" id="" className={select}>
          <option value="">최신순</option>
          <option value="">인기순</option>
        </select>
      </div>
      <table className={tableCol}>
        <caption>리스트 목록</caption>
        <colgroup>
          <col width="10%" />
          <col width="auto" />
          <col width="18%" />
          <col width="10%" />
        </colgroup>
        <thead>
          <tr>
            <th className={tableColTh}>No.</th>
            <th className={tableColTh}>제목</th>
            <th className={tableColTh}>등록일</th>
            <th className={tableColTh}>좋아요</th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 ? posts.map((post, idx) => (
            <tr key={post.id}>
              <td className={tableColTd}>{totalCount - ((page - 1) * pageSize + idx)}</td>
              <td className={tableColTd}>
                <Link href={`/board/detail?id=${post.id}`} className={`${ellipsisOneLine} ${hoverUnderline}`} style={{width: '90%'}}>
                  {post.title}
                </Link>
              </td>
              <td className={tableColTd}>
                <span>{post.created_at?.toISOString().slice(0, 10) ?? ''}</span>
              </td>
              <td className={tableColTd}>
                <span>{post.like_count ?? 0}</span>
              </td>
            </tr>
          )) : (
            <tr>
              <td className={tableEmptyList} colSpan={4}>게시물이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className={flex({type: 'end_start'})}>
        <Link href={'/board/write'} className={`${button({type: 'primary', size: 'medium'})}`} style={{marginBottom: '30px'}}>글쓰기</Link>
      </div>
      <Pagination totalPages={totalPages} currentPage={page} basePath="/board/list" />
    </>
  );
}
