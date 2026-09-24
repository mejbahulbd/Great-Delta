import React from 'react';
import { useSiteImages } from '../context/ImageContext';

interface EditableImageProps {
  imageKey: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  label?: string;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  imageKey,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative w-full h-full overflow-hidden',
}) => {
  const { getImage } = useSiteImages();
  const currentSrc = getImage(imageKey);

  return (
    <div className={containerClassName}>
      <img
        src={currentSrc}
        alt={alt}
        className={className}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
