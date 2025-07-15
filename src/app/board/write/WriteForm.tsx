'use client';
import Link from "next/link";
import { useState } from 'react';
import { pageTitle, tableRow, tableRowTh, tableRowTd, buttonWrapRight, button } from "@/styles/components.css";
import * as InputText from '@/components/InputText/InputText.css';
import InputFile from "@/components/InputFile/InputFile";
import { writePostAction } from './actions';
import dynamic from 'next/dynamic';

const MyEditor = dynamic(() => import('@/components/MyEditor'), {
  ssr: false,
  loading: () => <p>에디터 로딩 중...</p>,
});

export default function WriteForm({ post, files, type }: { post: any, files: any[], type?: string }) {
  const [remainFiles, setRemainFiles] = useState(files);
  const [deleteFileIds, setDeleteFileIds] = useState<number[]>([]);

  const handleDeleteFile = (fileId: number) => {
    setRemainFiles(remainFiles.filter(f => f.id !== fileId));
    setDeleteFileIds([...deleteFileIds, fileId]);
  };

  return (
    <div className="inner">
      <h2 className={pageTitle}>등록/수정</h2>
      <form action={writePostAction}>
        <input type="hidden" name="id" value={post?.id || ''} />
        {deleteFileIds.map(id => (
          <input key={id} type="hidden" name="deleteFileIds" value={id} />
        ))}
        <table className={tableRow}>
          <caption>글 작성</caption>
          <colgroup>
            <col width="20%" />
            <col width="auto" />
          </colgroup>
          <tbody>
            <tr>
              <th className={tableRowTh}>제목</th>
              <td className={tableRowTd}>
                <input 
                  type={'text'} 
                  name={'title'} 
                  className={InputText.input} 
                  defaultValue={post?.title || ''}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className={tableRowTh}>내용</th>
              <td className={tableRowTd}>
                <MyEditor name="content" initialValue={post?.content || ''} />
              </td>
            </tr>
            <tr>
              <th className={tableRowTh}>첨부파일</th>
              <td className={tableRowTd}>
                <InputFile name={'fileUpload'} id={'fileUpload'} />
                {remainFiles.length > 0 && (
                  <ul style={{marginTop: '8px'}}>
                    {remainFiles.map(file => (
                      <li 
                        key={file.id} 
                        style={{display: 'flex', alignItems: 'center', gap: '8px'}}
                      >
                        <a 
                          href={file.file_path} 
                          target="_blank" 
                          rel="noopener noreferrer">
                          {file.file_name}
                        </a>
                        <button type="button"  
                          style={{color: 'red', border: 'none', background: 'none', cursor: 'pointer'}}
                          onClick={() => handleDeleteFile(file.id)}
                        >
                          삭제
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <div className={buttonWrapRight} style={{marginTop: '30px', gap: '10px'}}>
          <Link 
            href={'/board/list'} 
            className={button({type: 'white', size: 'large'})}
          >
            목록
          </Link>
          <button 
            type="submit" 
            className={button({type: 'primary', size: 'large'})}
          >
            {type !== 'update' ? '등록' : '수정'}
          </button>
        </div>
      </form>
    </div>
  );
} 