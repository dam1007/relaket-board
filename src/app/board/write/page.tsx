// 글 작성/수정
import Link from "next/link";
import { pageTitle, tableRow, tableRowTh, tableRowTd, textarea, buttonWrapRight, button } from "@/styles/components.css";
import InputText from "@/components/InputText/InputText";
import InputFile from "@/components/InputFile/InputFile";

export default function page() {
    return (
        <div className="inner">
            <h2 className={pageTitle}>글쓰기</h2>
            <form action="" name="">
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
                                <InputText type={'text'} name={''} id={''} label={''} placeholder={''} />
                            </td>
                        </tr>
                        <tr>
                            <th className={tableRowTh}>내용</th>
                            <td className={tableRowTd}>
                                <textarea name="" id="" className={textarea} rows={10} />
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
            </form>
            <div className={buttonWrapRight} style={{marginTop: '30px', gap: '10px'}}>
                <Link href={'/board/list'} className={button({type: 'white', size: 'large'})}>목록</Link>
                <button type="button" className={button({type: 'primary', size: 'large'})}>등록</button>
            </div>
        </div>
    );
};