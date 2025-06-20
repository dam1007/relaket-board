// 회원가입
import * as join from './join.css';
import InputText from '@/components/InputText/InputText';
import { button } from '@/styles/components.css';

export default function page() {
    return (
        <section className={join.joinBox}>
            <div className={join.joinForm}>
                <h2 className="main_title">회원가입</h2>
                <form action="" name="">
                    <div className={join.inputWrap}>
                        <InputText type={'text'} name={'userId'} id={'userId'} label={'아이디'} placeholder={''} />
                    </div>
                    <div className={join.inputWrap}>
                        <InputText type={'password'} name={'password'} id={'password'} label={'비밀번호'} placeholder={''} />
                    </div>
                    <div className={join.inputWrap}>
                        <InputText type={'text'} name={'userName'} id={'userName'} label={'이름'} placeholder={''} />
                    </div>
                    <div className={join.inputWrap}>
                        <InputText type={'tel'} name={'userPhone'} id={'userPhone'} label={'휴대전화'} placeholder={''} />
                    </div>
                    <div className={join.inputWrap}>
                        <InputText type={'email'} name={'userEmail'} id={'userEmail'} label={'이메일'} placeholder={''} />
                    </div>
                    <button type="submit" className={button({type: 'primary', size: 'full'})} style={{marginTop: '30px'}}>가입하기</button>
                </form>
            </div>
        </section>
    );
};