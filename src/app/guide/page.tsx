import Link from 'next/link';
import { button, flex } from '@/styles/components.css';

export default function page() {
    return (
        <>
            {/* 버튼 */}
            <dl style={{ margin: '20px 0' }}>
                <dt>버튼</dt>
                <dd>
                    <button className={button({type: 'primary', size: 'medium'})}>Button</button>
                    <button className={button({type: 'secondary', size: 'medium'})}>Secondary</button>
                    <button className={button({type: 'red', size: 'medium'})}>Destructive</button>
                    <button className={button({type: 'white', size: 'medium'})}>Outline</button>
                    <button className={button({type: 'ghost', size: 'medium'})}>Ghost</button>
                    <Link className={button({type: 'link', size: 'medium'})} href={'/'}>Link</Link>
                    <button className={button({type: 'arrowPrev'})}></button>
                    <button className={button({type: 'arrowNext'})}></button>
                    <button className={button({type: 'icon', size: 'medium'})}><span>Login with Email</span></button>
                    <button className={button({type: 'loading', size: 'medium'})}><span>Please wait</span></button>
                </dd>
            </dl>

            {/* 정렬 */}
            <dl>
                <dt>정렬</dt>
                <dd>

                </dd>
            </dl>
        </>
    );
};