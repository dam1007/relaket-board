import * as profile from './Profile.css'
import Image from 'next/image';

export default function Profile() {
    return (
        <div className={profile.profile}>
            <figure className={profile.profileFrame}>
                <Image className={profile.profileImage} src="" alt="프로필 이미지" />
            </figure>
            <strong className={profile.profileId}>작성자 Id</strong>
        </div>
    );
};