// 파일 업로드
'use client'
import * as styles from "./InputFile.css";

export default function InputFile({ name, id }: { name: string, id: string}) {
    return (
        <input type="file" name={name} id={id} className={styles.InputFile} />
    );
};