// 검색결과 페이지
import * as styles from '@/styles/components.css';
import * as search from './search.css';
import Link from 'next/link';
import Pagination from '@/components/Pagination/Pagination';

export default function page() {
    return (
        <div className={search.searchWrapper}>
            <div className="inner">
                <div className={search.searchResult}>
                    <strong>키워드</strong>
                    <span>검색결과</span>
                </div>
                <div className={styles.utilWrap}>
                    <span className={styles.totalCount}>
                        총 <strong className={styles.count}>{0}</strong>
                    </span>
                    <select name="" id="" className={styles.select}>
                        <option value="">최신순</option>
                        <option value="">오래된순</option>
                        <option value="">조회수순</option>
                        <option value="">인기순</option>
                        <option value="">댓글순</option>
                    </select>
                </div>
                <table className={styles.tableCol}>
                    <caption>검색결과 목록</caption>
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
                            <th className={styles.tableColTh}>No</th>
                            <th className={styles.tableColTh}>제목</th>
                            <th className={styles.tableColTh}>조회수</th>
                            <th className={styles.tableColTh}>좋아요</th>
                            <th className={styles.tableColTh}>댓글</th>
                            <th className={styles.tableColTh}>등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* No */}
                            <td className={styles.tableColTd}>
                            </td>
                            
                            {/* 제목 */}
                            <td className={styles.tableColTd}>
                                <Link 
                                    href={`/board/detail?id=`} 
                                    className={`${styles.ellipsisOneLine} ${styles.hoverUnderline}`} 
                                >
                                </Link>
                            </td>

                            {/* 조회수 */}
                            <td className={styles.tableColTd}>
                                <span>

                                </span>
                            </td>

                            {/* 좋아요 */}
                            <td className={styles.tableColTd}>
                                <span>

                                </span>
                            </td>

                            {/* 댓글수 */}
                            <td className={styles.tableColTd}>
                                <span>

                                </span>
                            </td>

                            {/* 등록일 */}
                            <td className={styles.tableColTd}>
                                <span>

                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td 
                                className={styles.tableEmptyList} 
                                colSpan={6}
                            >
                                검색결과가 없습니다.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Pagination 
                    totalPages={0} 
                    currentPage={1} 
                    basePath={''} 
                />
            </div>
        </div>
    );
};