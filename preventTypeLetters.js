import React, { useState } from 'react';

const YourComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;

    // Check if the entered value is a number
    if (/^\d+$/.test(value)) {
      setInputValue(value);
    }
  };

  return (
    <div>
      <label>
        Enter a number:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
    </div>
  );
};

export default YourComponent;


const preventTypeLetter = (str) => {
  return /^\d+$/.test(str)
}
