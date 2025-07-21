'use client';
import { searchBox, searchBoxInput, searchBoxButton, select } from '@/styles/components.css';

export default function SearchForm({ type, keyword, sort }: { type: string, keyword: string, sort: string }) {
  return (
    <form
      className={searchBox}
      method="GET"
      action="/board/list"
      style={{ display: 'flex', gap: '4px' }}
      onSubmit={e => {
        const form = e.currentTarget;
        const typeSelect = form.querySelector('select[name="type"]') as HTMLSelectElement;
        if (typeSelect && typeSelect.value === '') {
          typeSelect.disabled = true;
        }
      }}
    >
      <select 
        name="type" 
        className={select} 
        style={{ flexShrink: '0', }} 
        defaultValue={type}
      >
        <option value="">전체</option>
        <option value="title">제목</option>
        <option value="content">내용</option>
      </select>
      <input 
        type="text" 
        name="keyword" 
        className={searchBoxInput} 
        placeholder="검색어를 입력해주세요." 
        defaultValue={keyword} 
      />
      <select 
        name="sort" 
        className={select} 
        style={{ flexShrink: '0' }}
        defaultValue={sort}
      >
        <option value="new">최신순</option>
        <option value="old">오래된순</option>
        <option value="view_count">조회수순</option>
        <option value="like">좋아요순</option>
        <option value="comment_count">댓글순</option>
      </select>
      <button type="submit" className={searchBoxButton}>검색</button>
    </form>
  );
} 