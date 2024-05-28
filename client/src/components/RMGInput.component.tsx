// src/components/RMGInput.tsx
import React from 'react';
import './RMGInput.css'; // יבוא קובץ העיצוב

interface RMGInputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}

const RMGInput: React.FC<RMGInputProps> = ({ type, placeholder, value, onChange, onKeyDown,className }) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="RMGInput"
    />
  );
};

export default RMGInput;
