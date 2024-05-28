import React from 'react';
import './RMGbutton.css'; // יבוא קובץ העיצוב

interface RMGButtonProps {
  title: string;
  onClick?: () => void;
  className?: string; // הוספת className כדי להעביר קלאסים נוספים לעיצוב
}

const RMGButton: React.FC<RMGButtonProps> = ({ title, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className="RMGButton" // הוספת ה-className של הקומפוננטה וקלאסים נוספים
    >
      {title}
    </button>
  );
};

export default RMGButton;

