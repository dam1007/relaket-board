'use client'; // App Router 사용하는 경우 필요

import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import type { Editor as TinyMCEEditor } from 'tinymce';

interface MyEditorProps {
    initialValue?: string;
    onChange?: (content: string) => void;
    name: string;
}

const MyEditor: React.FC<MyEditorProps> = ({ initialValue, name, onChange }) => {
    const handleEditorChange = (content: string, editor: TinyMCEEditor) => {
        onChange?.(content);
    };

    return (
        <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            value={initialValue ? initialValue : ''}
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
                images_upload_url: '/api/upload', // 이미지 업로드용 서버 엔드포인트
                automatic_uploads: true,
                images_upload_handler: (blobInfo, success, failure) => {
                    const formData = new FormData();
                    formData.append('file', blobInfo.blob(), blobInfo.filename());

                    fetch('/api/upload', {
                        method: 'POST',
                        body: formData,
                    })
                    .then((res) => res.json())
                    .then((json) => {
                        success(json.url)
                    })
                    .catch(() => {
                        failure('업로드 실패');
                    });
                },
                /* automatic_uploads: false, // 자동 업로드 비활성화
                images_upload_handler: () => {}, // 아무 것도 하지 않음
                images_dataimg_filter: () => true, // base64 삽입 허용
                paste_data_images: true, // 붙여넣은 이미지도 base64 처리 */
            }}
        />
    );
};

export default MyEditor;