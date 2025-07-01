'use client'

import Link from 'next/link';
import { button } from '@/styles/components.css';
import { pagination, paginationNum } from '@/styles/components.css';

export default function Pagination({ totalPages, currentPage, basePath }: { totalPages: number, currentPage: number, basePath: string }) {
    if (totalPages <= 1) return null;
    const pageNumArray = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className={pagination}>
            <Link
                href={`${basePath}?page=${Math.max(currentPage - 1, 1)}`}
                className={button({ type: 'arrowPrev' })}
                aria-disabled={currentPage === 1}
            ></Link>
            {pageNumArray.map((number) => (
                <Link
                    href={`${basePath}?page=${number}`}
                    className={`${paginationNum} ${number === currentPage ? 'active' : ''}`}
                    key={number}
                >
                    {number}
                </Link>
            ))}
            <Link
                href={`${basePath}?page=${Math.min(currentPage + 1, totalPages)}`}
                className={button({ type: 'arrowNext' })}
                aria-disabled={currentPage === totalPages}
            ></Link>
        </nav>
    );
}