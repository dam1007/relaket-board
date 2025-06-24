// 게시판 상세
import { writeBox, writeBoxHeader, writeBoxTitle, writeBoxDate, writeBoxBody, writeBoxTextWrap, writeBoxFileWrap, writeBoxFileTitle, writeBoxFileContents } from "../board.css";

export default function page() {
    return (
        <>
            <div className={writeBox}>
                <div className={writeBoxHeader}>
                    <h3 className={writeBoxTitle}>제목제목제목</h3>
                    <span className={writeBoxDate}>2025-06-24</span>
                </div>
                <div className={writeBoxBody}>
                    <div className={writeBoxTextWrap}>
                        <p>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
                    </div>
                    <dl className={writeBoxFileWrap}>
                        <dt className={writeBoxFileTitle}></dt>
                        <dd></dd>
                    </dl>
                </div>
            </div>
        </>
    );
};