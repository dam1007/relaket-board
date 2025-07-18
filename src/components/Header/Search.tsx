'use client'

import * as header from './Header.css';
import React, { useState, ChangeEvent } from 'react';

export default function Search() {
    const [keyword, setKeyword] = useState('');

    const writeKeyword = (event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value;
        setKeyword(value);
    };
    
    const deleteKeyword = () => {
        setKeyword('');
    };
    
    const searchKeyword = () => {
        
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
            />
            <button 
                type="button" 
                className={header.searchBoxDelButton}
                onClick={deleteKeyword}
            >
                검색어 삭제
            </button>
            <button 
                type="button" 
                className={header.searchBoxButton}
                onClick={searchKeyword}
            >
                검색
            </button>
        </div>
    )
}