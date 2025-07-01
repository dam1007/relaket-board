'use client'

import * as styles from './ImageUploader.css'
import Image from 'next/image';
import defaultProfile from '/public/default_profile.png';
import { useState, useRef } from 'react';

export default function ImageUploader() {
    const [imageSrc, setImageSrc] = useState(defaultProfile);
    const fileRef = useRef(null);

    /* const imageClickHandler = () => {

    };  */ 

    return (
        <div className={styles.ImageUploader}>
            <input type="file" name="" id="" className={styles.ImageUploaderInput} ref={fileRef} />
            <Image src={imageSrc} alt={'프로필 이미지'} className={styles.PreviewImage} />
            <button type="button" className={styles.ImageDeleteButton}>삭제</button>
        </div>
    );
};