// 게시판 리스트
import Link from 'next/link';
import { flex, button, tableCol, tableColTh, tableColTd, tableEmptyList } from '@/styles/components.css';
import Pagination from '@/components/Pagination/Pagination';

export default function page() {
    // 임시
    const totalPages = 7;
    
    return (
        <>
            <div className={flex({type: 'end_start'})}>
                <Link href={'/board/write'} className={`${button({type: 'primary', size: 'medium'})}`} style={{marginBottom: '30px'}}>글쓰기</Link>
            </div>
            <table className={tableCol}>
                <caption>리스트 목록</caption>
                <colgroup>
                    <col width="10%" />
                    <col width="25%" />
                    <col width="auto%" />
                    <col width="20%" />
                    <col width="10%" />
                </colgroup>
                <thead>
                    <tr>
                        <th className={tableColTh}>No.</th>
                        <th className={tableColTh}>제목</th>
                        <th className={tableColTh}>내용</th>
                        <th className={tableColTh}>등록일</th>
                        <th className={tableColTh}>좋아요</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={tableColTd}>1</td>
                        <td className={tableColTd}><span>test</span></td>
                        <td className={tableColTd}><Link href={'/board/detail'}>test</Link></td>
                        <td className={tableColTd}><span>0000-00-00</span></td>
                        <td className={tableColTd}>0</td>
                    </tr>
                    <tr>
                        <td className={tableEmptyList} colSpan={5}>게시물이 없습니다.</td>
                    </tr>
                </tbody>
            </table>
            <Pagination totalPages={totalPages} />
        </>
    );
};