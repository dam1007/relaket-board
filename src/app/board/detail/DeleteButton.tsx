'use client';
import { button } from '@/styles/components.css';
import { deletePostAction } from './actions';

export default function DeleteButton({ postId }: { postId: number }) {
    return (
        <form action={deletePostAction} style={{ display: 'inline-flex', width: 'auto' }}>
            <input type="hidden" name="postId" value={postId} />
            <button type="submit" className={button({ type: 'primary', size: 'large' })} onClick={(e) => {
                if (!confirm('삭제하시겠습니까?')) {
                    e.preventDefault();
                }
            }}>삭제</button>
        </form>
    );
} 