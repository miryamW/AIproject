// src/components/RMGImage.tsx
import './RMGImage.css'; // יבוא קובץ העיצוב
import React from 'react';

interface RMGImageProps {
  src: string;
  alt: string;
  className?: string;
}

const RMGImage: React.FC<RMGImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default RMGImage;
