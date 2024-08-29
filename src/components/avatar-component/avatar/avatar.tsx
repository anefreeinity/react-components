import React from "react";
interface AvatarProps {
    src: string;
    alt: string;
    size?: number;
    className?: string;
    action?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({
    src='',
    alt="avatar",
    size = 50,
    className = 'shadow-lg border-2 border-gray-300',
}) => {
    const avatarStyle = {
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover',
      } as React.CSSProperties;
    return (
            <img
            src={src}
            alt={alt}
            width={size}
            style={avatarStyle} 
            className={className}
            />
    );
}

export default Avatar;