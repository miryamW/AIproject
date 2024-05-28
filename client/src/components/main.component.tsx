import React, { useState } from 'react';
import axios from 'axios';

const MyComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendRequest();
    }
  };

  const sendRequest = () => {
    // ביצוע בקשת POST לשרת כאשר לוחצים על Enter
    axios.post('http://localhost:8000/getComponent', { input: inputValue })
      .then((response) => {
        console.log('Response:', response.data);
        // ניתן להוסיף פעולות נוספות לאחר קבלת התשובה מהשרת
      })
      .catch((error) => {
        console.error('Error:', error);
        // טיפול בשגיאה
      });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleEnterPress}
        placeholder="הזן טקסט ולחץ Enter"
      />
    </div>
  );
};

export default MyComponent;
