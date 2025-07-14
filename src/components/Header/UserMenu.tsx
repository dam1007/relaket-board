'use client';

import { useState, useEffect, useRef, useTransition } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as styles from './Header.css';
import { headerAvatar, avatarImage } from "../Avatar/Avatar.css";
import { logoutAction } from '@/app/member/logout/actions';
import { User } from '@/lib/auth';
import { useRouter } from 'next/navigation';

interface UserMenuProps {
  user: User;
}

export default function UserMenu({ user }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleLogout = () => {
    startTransition(async () => {
      await logoutAction();
      router.refresh();
    });
  };

  // 프로필 토글
  useEffect(() => { 
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as Node;

      if (toggleRef.current && toggleRef.current.contains(target)) {
        setIsOpen(prev => !prev);
      } else {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className={styles.myMenu} ref={toggleRef}>
      <figure className={headerAvatar}>
        <Image 
          src={'/default_profile.png'}
          alt={'프로필 이미지'} 
          width={100}
          height={100}
          className={avatarImage} 
        />
      </figure>

      {isOpen && (
      <ul className={styles.myMenuList}>
        <li className={`${styles.myMenuItem} ${styles.userName}`}>
          {user.userName}
          <span className={styles.userMail}>{user.userId}</span>
        </li>
        <li className={styles.myMenuItem}>
          <Link 
            className={styles.myMenuLink} 
            href="/mypage/myinfo">
            정보수정
          </Link>
        </li>
        <li className={`${styles.myMenuItem} ${styles.seperate}`}>
          <button 
            className={styles.myMenuLink} 
            onClick={handleLogout}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              width: '100%', 
              textAlign: 'left' 
            }}
            disabled={isPending}
          >
            로그아웃
          </button>
        </li>
      </ul>
      )}
    </div>
  );
} 