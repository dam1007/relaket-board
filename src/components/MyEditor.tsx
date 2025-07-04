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
                images_upload_handler: (blobInfo) => new Promise(async (resolve, reject) => {
                    const formData = new FormData();
                    formData.append('file', blobInfo.blob(), blobInfo.filename());

                    try {
                        const response = await fetch('/api/upload', {
                            method: 'POST',
                            body: formData,
                        });

                        if (!response.ok) {
                            // 서버가 에러 응답을 보냈을 때, 응답 본문을 텍스트로 읽어 에러 메시지로 사용
                            const errorText = await response.text();
                            try {
                                // 에러 메시지가 JSON 형태일 수 있으므로 파싱 시도
                                const errorJson = JSON.parse(errorText);
                                reject(errorJson.error || 'HTTP error!');
                            } catch {
                                // JSON 파싱 실패 시, 텍스트 자체를 에러 메시지로 사용
                                reject(`HTTP error! status: ${response.status}, ${errorText}`);
                            }
                            return;
                        }

                        const json = await response.json();

                        if (json && json.location) {
                            resolve(json.location);
                        } else {
                            reject('Invalid JSON: "location" property missing.');
                        }
                    } catch (error: any) {
                        // 네트워크 오류 또는 기타 예외
                        reject(`Upload failed: ${error.message}`);
                    }
                }),
            }}
        />
    );
};

export default MyEditor;