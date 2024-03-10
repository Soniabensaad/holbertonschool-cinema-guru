import React, { useState } from 'react';
import './general.css';

const SelectInput = ({ label, options, className, value, setValue }) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleInput = (event) => {
    setSelectedValue(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <select
        className={className}
        value={selectedValue}
        onChange={handleInput}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
