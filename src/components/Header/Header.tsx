'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import * as styles from './Header.css'
import { button } from '@/styles/components.css';
import { headerAvatar, avatarImage } from "../Avatar/Avatar.css";

export default function Header() {
    const [toggleAvatar, setToggleAvatar] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <h1 className={styles.logo}>
                    <Link href="/">Relaket Board</Link>
                </h1>
                <nav className={styles.joinNav}>
                    <Link className={button({type: 'white', size: 'medium'})} href="/member/login">로그인</Link>
                    <Link className={button({type: 'primary', size: 'medium'})} href="/member/join">회원가입</Link>
                    <div className={styles.myMenu}>
                        <figure className={headerAvatar} onClick={() => {setToggleAvatar(value => !value)}}>
                            <img className={avatarImage} src={'https://placehold.co/30'} alt={'프로필'} />
                        </figure>
                        {toggleAvatar ? 
                        <ul className={styles.myMenuList}>
                            <li className={`${styles.myMenuItem} ${styles.userName}`}>
                                계정명
                                <span className={styles.userMail}>이메일</span>
                            </li>
                            <li className={styles.myMenuItem}>
                                <Link className={styles.myMenuLink} href="">정보수정</Link>
                            </li>
                            <li className={`${styles.myMenuItem} ${styles.seperate}`}>
                                <Link className={styles.myMenuLink} href="/member/logout">로그아웃</Link>
                            </li>
                        </ul>
                        : 
                        null
                        }
                    </div>
                </nav>
            </div>
        </header>
    );
};