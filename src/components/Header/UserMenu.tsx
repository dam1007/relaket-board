'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import * as styles from './Header.css';
import { headerAvatar, avatarImage } from "../Avatar/Avatar.css";
import { logoutAction } from '@/app/member/logout/actions';
import { User } from '@/lib/auth';
import { useRouter } from 'next/navigation';

interface UserMenuProps {
  user: User;
}

export default function UserMenu({ user }: UserMenuProps) {
  const [toggleAvatar, setToggleAvatar] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleLogout = () => {
    startTransition(async () => {
      await logoutAction();
      router.refresh();
    });
  };

  return (
    <div className={styles.myMenu}>
      <figure className={headerAvatar} onClick={() => {setToggleAvatar(value => !value)}}>
        <img className={avatarImage} src={'https://placehold.co/30'} alt={'프로필'} />
      </figure>
      {toggleAvatar ? 
        <ul className={styles.myMenuList}>
          <li className={`${styles.myMenuItem} ${styles.userName}`}>
            {user.userName}
            <span className={styles.userMail}>{user.userId}</span>
          </li>
          <li className={styles.myMenuItem}>
            <Link className={styles.myMenuLink} href="">정보수정</Link>
          </li>
          <li className={`${styles.myMenuItem} ${styles.seperate}`}>
            <button 
              className={styles.myMenuLink} 
              onClick={handleLogout}
              style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}
              disabled={isPending}
            >
              로그아웃
            </button>
          </li>
        </ul>
      : 
        null
      }
    </div>
  );
} 