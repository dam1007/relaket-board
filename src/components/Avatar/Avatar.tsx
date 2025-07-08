import { avatar, avatarImage } from "./Avatar.css";

type AvatarProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    onClick: () => void;
};

export default function Avatar({src, alt, width, height}: AvatarProps) {
    return (
        <figure 
            className={avatar} 
            style={{width: width, height: height}}
        >
            <img 
                className={avatarImage}
                src={src}
                alt={alt}
            />
        </figure>
    );
};