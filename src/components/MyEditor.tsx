'use client';

import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import type { Editor as TinyMCEEditor } from 'tinymce';

interface MyEditorProps {
    initialValue?: string;
    name: string;
    onChange?: (content: string) => void;
}

const MyEditor: React.FC<MyEditorProps> = ({ initialValue, name, onChange }) => {
    const handleEditorChange = (content: string, editor: TinyMCEEditor) => {
        onChange?.(content);
    };

    return (
        <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            initialValue={initialValue ?? ''}
            textareaName={name}
            onEditorChange={handleEditorChange}
            init={{
                height: 400,
                menubar: false,
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | fontsize | bold italic underline | forecolor backcolor | lineheight | image | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help ',
                font_size_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
                line_height_formats: '1 1.2 1.4 1.6 2',
                color_cols: 10,
                color_cols_background: 3,
                images_file_types: 'jpg, jpeg, png',
                images_upload_url: '/api/upload', // 이미지 업로드용 서버 엔드포인트
                automatic_uploads: true,
                images_upload_handler: (
                    blobInfo: any,
                    success: (url: string) => void,
                    failure: (err: string) => void
                ) => {
                    const formData = new FormData();
                    formData.append('file', blobInfo.blob(), blobInfo.filename());

                    fetch('/api/upload', {
                        method: 'POST',
                        body: formData,
                    }).then((res) => {
                        if (!res.ok) {
                            return res.json().then(err => { throw new Error(err.error || '업로드 실패'); });
                        }
                        return res.json();
                    }).then((json) => {
                        if (json && json.location) {
                            console.log('json.location', json.location);
                            console.log(success);
                            success(json.location);
                        } else {
                            console.log('json.location 없음');
                            failure('서버 응답 오류: url 없음');
                        }
                    }).catch((err) => {
                        console.log(err);
                        failure('업로드 실패: ' + err.message);
                    });
                },
            }}
        />
    );
};

export default MyEditor;