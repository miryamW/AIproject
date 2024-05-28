// src/components/RMGHeader.tsx
import React from 'react';
import './RMGHeader.css'; // יבוא קובץ העיצוב

interface RMGHeaderProps {
  text: string;
  level: "1" | "2" | "3" | "4" | "5" | "6";
  className?: string;
}

const RMGHeader: React.FC<RMGHeaderProps> = ({ text, level, className }) => {
  const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements;

  return <HeaderTag className="RMGHeader">{text}</HeaderTag>;
};

export default RMGHeader;
