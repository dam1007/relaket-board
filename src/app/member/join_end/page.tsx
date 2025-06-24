// 가입완료
import Link from 'next/link';
import * as member from '@/app/member/member.css';
import { button, buttonWrapCenter } from '@/styles/components.css';
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Page() {
    return (
        <section className={member.joinEndDescWrap}>
            <IoCheckmarkCircle style={{width: '250px', height: '250px', marginBottom: '20px'}} />
            <h2 className={member.joinEndDescMain}>
                회원가입 완료
            </h2>
            <p className={member.joinEndDescSub}>님의 회원가입이 성공적으로 완료되었습니다.</p>
            <div className={buttonWrapCenter} style={{gap: '10px', marginTop: '30px'}}>
                <Link className={button({type: 'white', size: 'large'})} href={'/'}>홈으로</Link>
                <Link className={button({type: 'primary', size: 'large'})} href={'/member/login'}>로그인</Link>
            </div>
        </section>
    );
};