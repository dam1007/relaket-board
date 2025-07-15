// 게시판 리스트
import Link from 'next/link';
import { flex, button, tableCol, tableColTh, tableColTd, tableEmptyList, ellipsisOneLine, hoverUnderline } from '@/styles/components.css';
import Pagination from '@/components/Pagination/Pagination';
import knex from '@/lib/knex';
import SearchForm from './SearchForm';

export default async function Page({ searchParams }: { searchParams: Promise<{ page?: string; keyword?: string; type?: string; sort?: string }> }) {
    const { page, keyword = '', type = '', sort = 'new' } = await searchParams;
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
    } else if (sort === 'view_count') {
        query = query.orderBy('view_count', 'desc').orderBy('id', 'desc');
    } else if (sort === 'comment_count') {
        query = query.orderBy('comment_count', 'desc').orderBy('id', 'desc');
    } else if (sort === 'old') {
        query = query.orderBy('id', 'asc');
    } else {
        // 최신순(기본)
        query = query.orderBy('id', 'desc');
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
            <div 
                className={flex({ type: 'end_center' })} 
                style={{ gap: '4px', marginBottom: '20px' }}
            >
                <SearchForm 
                    type={type} 
                    keyword={keyword} 
                    sort={sort} 
                />
            </div>
            <table className={tableCol}>
                <caption>리스트 목록</caption>
                <colgroup>
                    <col width="8%" />
                    <col width="auto" />
                    <col width="10%" />
                    <col width="10%" />
                    <col width="10%" />
                    <col width="12%" />
                </colgroup>
                <thead>
                    <tr>
                        <th className={tableColTh}>No</th>
                        <th className={tableColTh}>제목</th>
                        <th className={tableColTh}>조회수</th>
                        <th className={tableColTh}>좋아요</th>
                        <th className={tableColTh}>댓글</th>
                        <th className={tableColTh}>등록일</th>
                    </tr>
                </thead>
                <tbody>
                {posts.length > 0 ? posts.map((post, idx) => (
                    <tr key={post.id}>
                        {/* No */}
                        <td className={tableColTd}>
                            {totalCount - ((pageNum - 1) * pageSize + idx)}
                        </td>
                        
                        {/* 제목 */}
                        <td className={tableColTd}>
                            <Link 
                                href={`/board/detail?id=${post.id}`} 
                                className={`${ellipsisOneLine} ${hoverUnderline}`} 
                            >
                                {post.title}
                            </Link>
                        </td>

                        {/* 조회수 */}
                        <td className={tableColTd}>
                            {post.view_count ?? 0}
                        </td>

                        {/* 좋아요 */}
                        <td className={tableColTd}>
                            <span>
                                {post.like_count ?? 0}
                            </span>
                        </td>

                        {/* 댓글수 */}
                        <td className={tableColTd}>
                            {post.comment_count ?? 0}
                        </td>

                        {/* 등록일 */}
                        <td className={tableColTd}>
                            <span>
                                {post.created_at?.toISOString().slice(0, 10) ?? ''}
                            </span>
                        </td>
                    </tr>
                )) : (
                    <tr>
                        <td 
                            className={tableEmptyList} 
                            colSpan={6}
                        >
                            게시물이 없습니다.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <div className={flex({ type: 'end_start' })}>
                <Link 
                    href={'/board/write'} 
                    className={button({ type: 'primary', size: 'medium' })} 
                    style={{ marginTop: '30px' }}
                >
                    글쓰기
                </Link>
            </div>
            <Pagination 
                totalPages={totalPages} 
                currentPage={pageNum} 
                basePath={basePathWithQuery} 
            />
        </>
    );
}
