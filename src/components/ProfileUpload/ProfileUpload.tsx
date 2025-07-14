// 프로필 이미지 업로드
'use client'

import * as profile from './ProfileUpload.css';
import Image from 'next/image';
import { useState, useRef } from 'react';

export default function ProfileUpload() {
    const [uploadImage, setUploadImage] = useState<string | null>(null);
    const fileInput = useRef<HTMLInputElement>(null);

    const clickProfileImage = () => {
        fileInput.current?.click();
    };

    const changeProfileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files?.[0];

        if (!file) {
            return;
        }
        
        const fileReader = new FileReader();
        
        fileReader.onload = () => {
            setUploadImage(fileReader.result as string);
        };
        fileReader.readAsDataURL(file);
    };
    
    return (
        <div className={profile.profileUpload}>
            <Image 
                src={uploadImage || '/default_profile.png'} 
                alt="프로필 이미지" 
                width={100}
                height={100}
                className={profile.profileUploadImage}
                onClick={clickProfileImage}
            />
            <input 
                type="file" 
                name="profileImageInput" 
                id="profileImageInput" 
                className={profile.profileUploadInput} 
                ref={fileInput}
                onChange={changeProfileImage}
            />
        </div>
    );
};