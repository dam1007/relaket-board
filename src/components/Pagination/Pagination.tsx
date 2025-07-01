'use client'

import Link from 'next/link';
import { button } from '@/styles/components.css';
import { pagination, paginationNum } from '@/styles/components.css';

function addPageParam(basePath: string, page: number) {
    // basePath는 /board/list 또는 /board/list?keyword=xxx&type=yyy 형태
    const hasQuery = basePath.includes('?');
    const url = hasQuery ? `${basePath}&page=${page}` : `${basePath}?page=${page}`;
    return url;
}

export default function Pagination({ totalPages, currentPage, basePath }: { totalPages: number, currentPage: number, basePath: string }) {
    if (totalPages <= 1) return null;
    const pageNumArray = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className={pagination}>
            <Link
                href={addPageParam(basePath, Math.max(currentPage - 1, 1))}
                className={button({ type: 'arrowPrev' })}
                aria-disabled={currentPage === 1}
            ></Link>
            {pageNumArray.map((number) => (
                <Link
                    href={addPageParam(basePath, number)}
                    className={`${paginationNum} ${number === currentPage ? 'active' : ''}`}
                    key={number}
                >
                    {number}
                </Link>
            ))}
            <Link
                href={addPageParam(basePath, Math.min(currentPage + 1, totalPages))}
                className={button({ type: 'arrowNext' })}
                aria-disabled={currentPage === totalPages}
            ></Link>
        </nav>
    );
}