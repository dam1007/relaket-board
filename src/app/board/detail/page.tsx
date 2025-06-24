// 게시판 상세
import Link from "next/link";
import * as board from "../board.css";
import { hoverUnderline, buttonWrapRight, button } from '@/styles/components.css';

export default function Page() {
    return (
        <>
            <div className={board.writeBox}>
                <div className={board.writeBoxHeader}>
                    <h3 className={board.writeBoxTitle}>제목제목제목</h3>
                    <span className={board.writeBoxDate}>2025-06-24</span>
                </div>
                <div className={board.writeBoxBody}>
                    <div className={board.writeBoxTextWrap}>
                        <p>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
                    </div>
                    <dl className={board.writeBoxFileWrap}>
                        <dt className={board.writeBoxFileTitle}>
                            첨부파일
                        </dt>
                        <dd>
                            <Link href={'#'} className={hoverUnderline}>파일 링크</Link>
                        </dd>
                    </dl>
                </div>
            </div>
            <div className={buttonWrapRight} style={{marginTop: '30px', gap: '10px'}}>
                <Link href={'/board/list'} className={button({type: 'white', size: 'large'})}>목록</Link>
                <Link href={'/board/write?type=update'} className={button({type: 'primary', size: 'large'})}>수정</Link>
            </div>
        </>
    );
};