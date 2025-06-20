// 이메일 인증
import InputText from "../InputText/InputText"
import { button } from '@/styles/components.css';

export default function InputEmail() {
    return (
        <div className="">
            <InputText type={'email'} name={'userEmail'} id={'userEmail'} label={'이메일'} />
            <button className={button({type: 'white', size: 'medium'})} href="/member/login">인증하기</button>
        </div>
    )
}