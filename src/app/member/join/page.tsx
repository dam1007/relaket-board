'use client';

import { useActionState } from 'react';
import * as member from '@/app/member/member.css';
import InputText from '@/components/InputText/InputText';
import ProfileUpload from '@/components/ProfileUpload/ProfileUpload';
import { pageTitle, button, inputWrap, buttonWrapCenter } from '@/styles/components.css';
import { joinAction } from './actions';

const initialState = {
    error: '',
    fields: {
        userId: '',
        userName: '',
        userPhone: '',
        userEmail: '',
    },
};

export default function Page() {
    const [state, formAction] = useActionState(joinAction, initialState);

    return (
        <section className={member.memberBox}>
            <div className={member.memberFormWrap}>
                <h2 className={pageTitle}>회원가입</h2>
                <form action={formAction}>
                    <div className={buttonWrapCenter}>
                        <ProfileUpload />
                    </div>
                    <div className={inputWrap}>
                        <InputText
                            type={'text'}
                            name={'userId'}
                            id={'userId'}
                            label={'아이디'}
                            placeholder={''}
                            required
                            defaultValue={state.fields?.userId}
                        />
                    </div>
                    <div className={inputWrap}>
                        <InputText
                            type={'password'}
                            name={'password'}
                            id={'password'}
                            label={'비밀번호'}
                            placeholder={''}
                            required
                        />
                    </div>
                    <div className={inputWrap}>
                        <InputText
                            type={'text'}
                            name={'userName'}
                            id={'userName'}
                            label={'이름'}
                            placeholder={''}
                            required
                            defaultValue={state.fields?.userName}
                        />
                    </div>
                    <div className={inputWrap}>
                        <InputText
                            type={'email'}
                            name={'userEmail'}
                            id={'userEmail'}
                            label={'이메일'}
                            placeholder={''}
                            required
                            defaultValue={state.fields?.userEmail}
                        />
                    </div>
                    {state?.error 
                    &&
                    <p style={{ color: 'red', marginTop: '10px' }}>
                        {state.error}
                    </p>
                    }
                    <button 
                        type="submit" 
                        className={button({ type: 'primary', size: 'full' })} 
                        style={{ marginTop: '30px' }}
                    >
                        가입하기
                    </button>
                </form>
            </div>
        </section>
    );
}
