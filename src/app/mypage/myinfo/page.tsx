// 기본 정보 수정

import { useActionState } from 'react';
import { myInfoAction } from './actions';
import * as styles from '@/styles/components.css';
import * as mypage from '@/app/mypage/mypage.css';
import ProfileUpload from '@/components/ProfileUpload/ProfileUpload';

const initialState = {
    error: '',
    fields: {
        userId: '',
        userName: '',
        userPhone: '',
        userEmail: '',
    },
};

export default function page() {
    // const [state, formAction] = useActionState(myInfoAction, initialState);

    return (
        <section>
            <form action="" name="">
                <h2 className={mypage.myPageTitle}>개인 정보</h2>
                <div className={styles.tableRowWrap}>
                    <table className={styles.tableRow}>
                        <colgroup>
                            <col width="20%;"/>
                            <col width="auto;"/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th className={styles.tableRowTh}>프로필</th>
                                <td className={styles.tableRowTd}>
                                    <ProfileUpload />
                                </td>
                            </tr>
                            <tr>
                                <th className={styles.tableRowTh}>아이디</th>
                                <td className={styles.tableRowTd}></td>
                            </tr>
                            <tr>
                                <th className={styles.tableRowTh}>비밀번호</th>
                                <td className={styles.tableRowTd}>
                                    <p 
                                        className={mypage.editable} 
                                        contentEditable 
                                        suppressContentEditableWarning
                                    >
                                        111
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th className={styles.tableRowTh}>이름</th>
                                <td className={styles.tableRowTd}></td>
                            </tr>
                            <tr>
                                <th className={styles.tableRowTh}>이메일</th>
                                <td className={styles.tableRowTd}>
                                    <p 
                                        className={mypage.editable} 
                                        contentEditable 
                                        suppressContentEditableWarning
                                    >
                                        222
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.buttonWrapRight} style={{marginTop: '30px'}}>
                    <button 
                        type="button" 
                        className={styles.button({type: 'black', size: 'large'})}
                    >
                        수정
                    </button>
                </div>
            </form>
        </section>
    );
};