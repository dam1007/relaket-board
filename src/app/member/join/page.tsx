'use client';

import { useActionState } from 'react';
import * as member from '@/app/member/member.css';
import InputText from '@/components/InputText/InputText';
import { pageTitle, button, inputWrap } from '@/styles/components.css';
import { joinAction } from './actions';

const initialState = {
  error: '',
  fieldErrors: {
    userId: undefined,
    password: undefined,
    userName: undefined,
    userPhone: undefined,
    userEmail: undefined,
  },
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
            {state.fieldErrors?.userId && (
              <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>
                {state.fieldErrors.userId}
              </p>
            )}
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
            {state.fieldErrors?.password && (
              <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>
                {state.fieldErrors.password}
              </p>
            )}
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
            {state.fieldErrors?.userName && (
              <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>
                {state.fieldErrors.userName}
              </p>
            )}
          </div>
          <div className={inputWrap}>
            <InputText
              type={'tel'}
              name={'userPhone'}
              id={'userPhone'}
              label={'휴대전화'}
              placeholder={''}
              defaultValue={state.fields?.userPhone}
            />
            {state.fieldErrors?.userPhone && (
              <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>
                {state.fieldErrors.userPhone}
              </p>
            )}
          </div>
          <div className={inputWrap}>
            <InputText
              type={'email'}
              name={'userEmail'}
              id={'userEmail'}
              label={'이메일'}
              placeholder={''}
              defaultValue={state.fields?.userEmail}
            />
            {state.fieldErrors?.userEmail && (
              <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>
                {state.fieldErrors.userEmail}
              </p>
            )}
          </div>
          {state?.error && (
            <p style={{ color: 'red', marginTop: '10px' }}>{state.error}</p>
          )}
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
