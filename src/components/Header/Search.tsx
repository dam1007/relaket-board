'use client'

import * as header from './Header.css';
import React, { useRef, useState, ChangeEvent, useEffect } from 'react';

export default function Search() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [keyword, setKeyword] = useState('');
    const [isDeleteButton, setIsDeleteButton] = useState(false);

    useEffect(() => {
        // 검색어 존재여부에 따른 삭제 버튼 노출 처리
        if (keyword) {
            setIsDeleteButton(true);
        } else {
            setIsDeleteButton(false);
        }
    }, [keyword]);

    const writeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value;
        setKeyword(value);
    };
    
    const deleteKeyword = () => {
        setKeyword(''); // 키워드 삭제
        inputRef.current?.focus(); // input focus
    };
    
    return (
        <div className={header.searchBox}>
            <input 
                type="text" 
                name="" 
                id=""
                className={header.searchBoxInput}
                value={keyword}
                onChange={writeKeyword}
                ref={inputRef}
            />
            {isDeleteButton 
            &&
            <button 
                type="button" 
                className={header.searchBoxDelButton}
                onClick={deleteKeyword}
            >
                검색어 삭제
            </button>
            }
            <button 
                type="button" 
                className={header.searchBoxButton}
            >
                검색
            </button>
        </div>
    )
}