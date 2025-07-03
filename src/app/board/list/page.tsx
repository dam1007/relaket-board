// 게시판 리스트
import Link from 'next/link';
import { flex, button, tableCol, tableColTh, tableColTd, tableEmptyList, searchBox, searchBoxInput, searchBoxButton, select, ellipsisOneLine, hoverUnderline } from '@/styles/components.css';
import Pagination from '@/components/Pagination/Pagination';
import knex from '@/lib/knex';

export default async function Page({ searchParams }: { searchParams: Promise<{ page?: string; keyword?: string; type?: string; sort?: string }> }) {
    const { page, keyword = '', type = '', sort = '' } = await searchParams;
    const pageNum = Math.max(Number(page) || 1, 1);
    const pageSize = 10;

    // 검색 조건 쿼리
    let query = knex('relaket_post');
    if (keyword) {
        if (type === 'title') {
            query = query.where('title', 'like', `%${keyword}%`);
        } else if (type === 'content') {
            query = query.where('content', 'like', `%${keyword}%`);
        } else {
            query = query.where(function() {
                this.where('title', 'like', `%${keyword}%`).orWhere('content', 'like', `%${keyword}%`);
            });
        }
    }

    // 정렬 조건
    if (sort === 'like') {
        query = query.orderBy('like_count', 'desc').orderBy('id', 'desc');
    } else {
        query = query.orderBy('id', 'desc'); // 최신순(기본)
    }

    // 전체 게시글 수
    const [{ count }] = await query.clone().count<{ count: number }[]>({ count: '*' });
    const totalCount = Number(count);
    const totalPages = Math.ceil(totalCount / pageSize);

    // 게시글 목록
    const posts = await query
        .clone()
        .select('*')
        .limit(pageSize)
        .offset((pageNum - 1) * pageSize);

    // 검색 파라미터 유지용 basePath 생성 (page, sort 제외)
    const params = new URLSearchParams();
    if (keyword) params.set('keyword', keyword);
    if (type) params.set('type', type);
    if (sort) params.set('sort', sort);
    const basePathWithQuery = `/board/list${params.toString() ? '?' + params.toString() : ''}`;

    return (
        <>
            <div className={flex({ type: 'end_center' })} style={{ gap: '4px', marginBottom: '20px' }}>
                <form className={searchBox} method="GET" action="/board/list" style={{ display: 'flex', gap: '4px' }}>
                    <select name="type" className={select} style={{ flexShrink: '0', width: '90px' }} defaultValue={type}>
                        <option value="">전체</option>
                        <option value="title">제목</option>
                        <option value="content">내용</option>
                    </select>
                    <input type="text" name="keyword" className={searchBoxInput} placeholder="검색어를 입력해주세요." defaultValue={keyword} />
                    <select name="sort" className={select} style={{ flexShrink: '0', width: '90px' }} defaultValue={sort}>
                        <option value="">최신순</option>
                        <option value="">오래된순</option>
                        <option value="">조회수순</option>
                        <option value="like">인기순</option>
                        <option value="">댓글순</option>
                    </select>
                    <button type="submit" className={searchBoxButton}>검색</button>
                </form>
            </div>
            <table className={tableCol}>
                <caption>리스트 목록</caption>
                <colgroup>
                    <col width="8%" />
                    <col width="auto" />
                    <col width="15%" />
                    <col width="7%" />
                    <col width="7%" />
                    <col width="7%" />
                </colgroup>
                <thead>
                    <tr>
                        <th className={tableColTh}>No.</th>
                        <th className={tableColTh}>제목</th>
                        <th className={tableColTh}>등록일</th>
                        <th className={tableColTh}>조회수</th>
                        <th className={tableColTh}>좋아요</th>
                        <th className={tableColTh}>댓글</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.length > 0 ? posts.map((post, idx) => (
                        <tr key={post.id}>
                            {/* No */}
                            <td className={tableColTd}>{totalCount - ((pageNum - 1) * pageSize + idx)}</td>
                            
                            {/* 제목 */}
                            <td className={tableColTd}>
                                <Link href={`/board/detail?id=${post.id}`} className={`${ellipsisOneLine} ${hoverUnderline}`} style={{ width: '90%' }}>
                                    {post.title}
                                </Link>
                            </td>

                            {/* 등록일 */}
                            <td className={tableColTd}>
                                <span>{post.created_at?.toISOString().slice(0, 10) ?? ''}</span>
                            </td>

                            {/* 조회수 */}
                            <td className={tableColTd}>
                                <span></span>
                            </td>

                            {/* 좋아요 */}
                            <td className={tableColTd}>
                                <span>{post.like_count ?? 0}</span>
                            </td>

                            {/* 댓글 */}
                            <td className={tableColTd}>
                                <span></span>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td className={tableEmptyList} colSpan={4}>게시물이 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className={flex({ type: 'end_start' })}>
                <Link href={'/board/write'} className={`${button({ type: 'primary', size: 'medium' })}`} style={{ marginTop: '30px' }}>글쓰기</Link>
            </div>
            <Pagination totalPages={totalPages} currentPage={pageNum} basePath={basePathWithQuery} />
        </>
    );
}
