import * as profile from './Profile.css'
import Image from 'next/image';

interface ProfileProps {
    src?: string | null;
    alt: string;
    userId: string;
}

export default function Profile({ src, alt, userId }: ProfileProps) {
    const profileImageSrc = src || '/default_profile.png'; // src가 없으면 기본 이미지 사용

    return (
        <div className={profile.profile}>
            <figure className={profile.profileFrame}>
                <Image className={profile.profileImage} src={profileImageSrc} alt={alt} width={30} height={30} />
            </figure>
            <strong className={profile.profileId}>{userId}</strong>
        </div>
    );
};