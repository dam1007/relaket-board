'use client'; // App Router 사용하는 경우 필요

import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import type { Editor as TinyMCEEditor } from 'tinymce';

interface MyEditorProps {
    initialValue?: string;
    onChange?: (content: string) => void;
}

const MyEditor: React.FC<MyEditorProps> = ({ initialValue = '', onChange }) => {
    const handleEditorChange = (content: string, editor: TinyMCEEditor) => {
        onChange?.(content);
    };

    return (
        <Editor
            apiKey="8vpzfyed5egwfle263ov9hyaxlok8l6p7mbtec1yieih4k4g"
            value={initialValue}
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
                    'undo redo | formatselect | bold italic underline | image | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help ',
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