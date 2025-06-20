import Link from 'next/link';
import { button, flex } from '@/styles/components.css';

export default function page() {
    return (
        <>
            {/* 버튼 */}
            <dl style={{ margin: '20px 0' }}>
                <dt>버튼</dt>
                <dd>
                    <button className={button({type: 'primary'})}>Button</button>
                    <button className={button({type: 'secondary'})}>Secondary</button>
                    <button className={button({type: 'red'})}>Destructive</button>
                    <button className={button({type: 'white'})}>Outline</button>
                    <button className={button({type: 'ghost'})}>Ghost</button>
                    <Link className={button({type: 'link'})} href={'/'}>Link</Link>
                    <button className={button({type: 'arrow'})}></button>
                    <button className={button({type: 'icon'})}><span>Login with Email</span></button>
                    <button className={button({type: 'loading'})}><span>Please wait</span></button>
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