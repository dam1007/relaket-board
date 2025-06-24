// 게시판 리스트
import Link from 'next/link';
import { flex, button, tableCol, tableColTh, tableColTd, tableEmptyList, searchBox, searchBoxInput, searchBoxButton, select, ellipsisOneLine, hoverUnderline } from '@/styles/components.css';
import Pagination from '@/components/Pagination/Pagination';

export default function page() {
    // 임시
    const totalPages = 7;
    
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
                    <tr>
                        <td className={tableColTd}>1</td>
                        <td className={tableColTd}>
                            <Link href={'/board/detail'} className={`${ellipsisOneLine} ${hoverUnderline}`} style={{width: '90%'}}>
                                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                            </Link>
                        </td>
                        <td className={tableColTd}>
                            <span>0000-00-00</span>
                        </td>
                        <td className={tableColTd}>
                            <span>0</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableEmptyList} colSpan={4}>게시물이 없습니다.</td>
                    </tr>
                </tbody>
            </table>
            <div className={flex({type: 'end_start'})}>
                <Link href={'/board/write'} className={`${button({type: 'primary', size: 'medium'})}`} style={{marginBottom: '30px'}}>글쓰기</Link>
            </div>
            <Pagination totalPages={totalPages} />
        </>
    );
};