'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import * as member from '@/app/member/member.css';
import InputText from '@/components/InputText/InputText';
import { pageTitle, blue, button, inputWrap } from '@/styles/components.css';
import { loginAction } from './actions';

const initialState = {
  error: '',
  fields: {
    userId: '',
  },
};

export default function Page() {
  const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <section className={member.memberBox}>
      <div className={member.memberFormWrap}>
        <h2 className={pageTitle}>로그인</h2>
        <form action={formAction}>
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
            <InputText type={'password'} name={'password'} id={'password'} label={'비밀번호'} placeholder={''} required />
          </div>
          {state?.error && <p style={{ color: 'red', marginTop: '10px' }}>{state.error}</p>}
          <button type="submit" className={button({ type: 'primary', size: 'full' })} style={{ marginTop: '30px' }}>
            로그인
          </button>
        </form>
        <div className={member.loginDescWrap}>
          <p className="">계정이 없으신가요?</p>
          <Link className={blue} href={'/member/join'}>
            가입하기
          </Link>
        </div>
      </div>
    </section>
  );
}