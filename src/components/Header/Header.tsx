import Link from 'next/link';
import * as styles from './Header.css'
import { button } from '@/styles/components.css';
import { getCurrentUser } from '@/lib/auth';
import UserMenu from './UserMenu';
import Search from './Search';

export default async function Header() {
    const user = await getCurrentUser();

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <nav className={styles.gnbNav}>
                    <Link href="/" className={styles.gnbNavLink}>홈</Link>
                    <Link href="/board/list" className={styles.gnbNavLink}>게시판</Link>
                    <Link href="/about" className={styles.gnbNavLink}>프로젝트소개</Link>
                </nav>
                <div>
                    <Search />
                    <nav className={styles.joinNav}>
                        {user ? (
                            <UserMenu user={user} />
                        ) : (
                            <>
                                <Link className={button({type: 'white', size: 'medium'})} href="/member/login">로그인</Link>
                                <Link className={button({type: 'primary', size: 'medium'})} href="/member/join">회원가입</Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}