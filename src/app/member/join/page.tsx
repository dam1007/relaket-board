// 회원가입
import * as member from '@/app/member/member.css';
import InputText from '@/components/InputText/InputText';
import { pageTitle, button, inputWrap } from '@/styles/components.css';

export default function Page() {
    return (
        <section className={member.memberBox}>
            <div className={member.memberFormWrap}>
                <h2 className={pageTitle}>회원가입</h2>
                <form action="" name="">
                    <div className={inputWrap}>
                        <InputText type={'text'} name={'userId'} id={'userId'} label={'아이디'} placeholder={''} />
                    </div>
                    <div className={inputWrap}>
                        <InputText type={'password'} name={'password'} id={'password'} label={'비밀번호'} placeholder={''} />
                    </div>
                    <div className={inputWrap}>
                        <InputText type={'text'} name={'userName'} id={'userName'} label={'이름'} placeholder={''} />
                    </div>
                    <div className={inputWrap}>
                        <InputText type={'tel'} name={'userPhone'} id={'userPhone'} label={'휴대전화'} placeholder={''} />
                    </div>
                    <div className={inputWrap}>
                        <InputText type={'email'} name={'userEmail'} id={'userEmail'} label={'이메일'} placeholder={''} />
                    </div>
                    <div className={inputWrap}>

                    </div>
                    <button type="submit" className={button({type: 'primary', size: 'full'})} style={{marginTop: '30px'}}>가입하기</button>
                </form>
            </div>
        </section>
    );
};