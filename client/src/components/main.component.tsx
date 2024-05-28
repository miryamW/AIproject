import React, { useState } from 'react';
import axios from 'axios';
import RMGInput from './RMGInput.component';
import RMGHeader from './RMGHeader.component';
import RMGText from './RMGText.component';
import Factory from './Factory.component';

const MyComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [jsonResponse,setJsonResponse] = useState<any>(null);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {      
     return sendRequest();
    }
  };

  const sendRequest = () => {
    // ביצוע בקשת POST לשרת כאשר לוחצים על Enter
    axios.post('http://localhost:7000/getComponent', { input: inputValue })
      .then((response) => {
        setJsonResponse(response.data); // Set the JSON response to state
        console.log(jsonResponse);
        
        // ניתן להוסיף פעולות נוספות לאחר קבלת התשובה מהשרת
      })
      .catch((error) => {
        console.error('Error:', error);
        // טיפול בשגיאה
      });
  };

  return (
    <div>
      <RMGHeader text={'Component Description'} level={'2'} ></RMGHeader>
      <RMGText text={'here you can ask any component you want'}></RMGText>
      <RMGInput
        type="text"
        value={inputValue}
        onChange={handleInputChange}
       onKeyDown={handleEnterPress}
        placeholder="הזן טקסט ולחץ Enter"
      />
      {jsonResponse && <Factory json={jsonResponse} />}
    </div>

  );
};

export default MyComponent;
