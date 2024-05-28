// src/components/RMGInput.tsx
import React from 'react';
import './RMGInput.css'; // יבוא קובץ העיצוב

interface RMGInputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const RMGInput: React.FC<RMGInputProps> = ({ type, placeholder, value, onChange, className }) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      // value={value}
      // onChange={onChange}
      className="RMGInput"
    />
  );
};

export default RMGInput;
