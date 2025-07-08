'use client'

import * as styles from '@/components/LengthCheck/LengthCheck.css';
import { useState, useEffect } from 'react';

interface LengthCheckProps {
    name: string;
    id: string;
    initialValue: string | undefined;
    maxLength: string;
    placeholder?: string;
    onChange?: (value: string) => void;
}

export default function LengthCheck({ name, id, initialValue, maxLength, placeholder, onChange }: LengthCheckProps) {
    const [text, setText] = useState(initialValue || '');

    useEffect(() => {
        if (initialValue !== undefined) {
            setText(initialValue);
        }
    }, [initialValue]);

    const handleSetText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        const maxLengthNum = Number(maxLength);
        
        let newText = value;
        if (value.length > maxLengthNum) {
            newText = value.slice(0, maxLengthNum);
        }
        setText(newText);

        if (onChange) {
            onChange(newText);
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
                {text.length}
                <span className={styles.maxLength}>
                    {' '}/{' '}{maxLength}
                </span>
            </span>
        </div>
    );
};