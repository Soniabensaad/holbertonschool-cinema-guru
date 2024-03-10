import React, { useState } from 'react';
import './general.css';

const Input = ({ label, type, className, value, setValue, icon = null }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInput = (event) => {
    setInputValue(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type={type}
        className={className}
        value={inputValue}
        onChange={handleInput}
      />
    </div>
  );
};
