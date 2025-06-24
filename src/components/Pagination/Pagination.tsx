'use client'

import Link from 'next/link';
import { button } from '@/styles/components.css';
import { pagination, paginationNum } from '@/styles/components.css';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page'));
    const pageNumArray = [1, 2, 3, 4, 5];

    return (
        <nav className={pagination}>
            <Link href={`${pathname}?page=${currentPage-1}`} className={button({type: 'arrowPrev'})}></Link>
            {pageNumArray.map((number) => (
                <Link 
                    href={`${pathname}?page=${number}`} 
                    className={`${paginationNum} ${number === currentPage ? 'active': null}`} 
                    key={number}
                >
                    {number}
                </Link>
            ))}
            <Link href={`${pathname}?page=${currentPage+1}`} className={button({type: 'arrowNext'})}></Link>
        </nav>
    );
};