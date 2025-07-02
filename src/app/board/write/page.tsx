// 글 작성/수정
'use client'

import Link from "next/link";
import { useSearchParams } from 'next/navigation'
import { pageTitle, tableRow, tableRowTh, tableRowTd, textarea, buttonWrapRight, button } from "@/styles/components.css";
import * as InputText from '@/components/InputText/InputText.css';
import InputFile from "@/components/InputFile/InputFile";
import { writePostAction } from './actions';
import dynamic from 'next/dynamic';

const MyEditor = dynamic(() => import('@/components/MyEditor'), {
    ssr: false,
    loading: () => <p>에디터 로딩 중...</p>,
});

export default function Page() {
    const searchParams = useSearchParams();
    const query = searchParams.get('type');

    return (
        <div className="inner">
            <h2 className={pageTitle}>등록/수정</h2>
            <form action={writePostAction}>
                <table className={tableRow}>
                    <caption>글 작성</caption>
                    <colgroup>
                        <col width="20%" />
                        <col width="auto" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th className={tableRowTh}>제목</th>
                            <td className={tableRowTd}>
                                <input type={'text'} name={'title'} className={InputText.input} required />
                            </td>
                        </tr>
                        <tr>
                            <th className={tableRowTh}>내용</th>
                            <td className={tableRowTd}>
                                {/* <textarea name="content" className={textarea} rows={10} required /> */}
                                <MyEditor />
                            </td>
                        </tr>
                        <tr>
                            <th className={tableRowTh}>첨부파일</th>
                            <td className={tableRowTd}>
                                <InputFile name={'fileUpload'} id={'fileUpload'} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={buttonWrapRight} style={{marginTop: '30px', gap: '10px'}}>
                    <Link href={'/board/list'} className={button({type: 'white', size: 'large'})}>목록</Link>
                    <button type="submit" className={button({type: 'primary', size: 'large'})}>
                        {query !== 'update' ? '등록' : '수정'}
                    </button>
                </div>
            </form>
        </div>
    );
};