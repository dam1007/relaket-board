// 댓글 영역 > 글자수 체크
'use client'

import * as styles from '@/components/LengthCheck/LengthCheck.css';
import { useState } from 'react';

interface LengthCheckProps {
    name: string;
    id: string;
    initialValue: string | undefined;
    maxLength: string;
    placeholder?: string;
}

export default function LengthCheck({ name, id, initialValue, maxLength, placeholder }: LengthCheckProps) {
    const [text, setText] = useState(initialValue);
    const handleSetText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        const maxLengthNum = Number(maxLength);
        
        // 글자 수 초과 시 잘림
        if (value.length > maxLengthNum) {
            setText(value.slice(0, maxLengthNum));
        } else {
            setText(value);
        }
    };

    return (
        <div className={styles.lengthCheckWrap}>
            <textarea 
                name={name} 
                id={id} 
                className={styles.lengthCheckTextarea} 
                value={text} 
                placeholder={placeholder}
                onChange={handleSetText}
            />
            <span className={styles.lengthCheck}>
                {text ? text.length: 0}
                <span className={styles.maxLength}>
                    {' '}/{' '}{maxLength}
                </span>
            </span>
        </div>
    );
};