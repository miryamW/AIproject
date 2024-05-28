// src/components/RMGText.tsx
import React from 'react';
import './RMGText.css'; // יבוא קובץ העיצוב

interface RMGTextProps {
  text: string;
  className?: string;
}

const RMGText: React.FC<RMGTextProps> = ({ text, className }) => {
  return <p className="RMGText">{text}</p>;
};

export default RMGText;
