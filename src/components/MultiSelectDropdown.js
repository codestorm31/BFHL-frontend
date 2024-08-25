import React from 'react';

const options = ['Alphabets', 'Numbers', 'Highest lowercase alphabet'];

function MultiSelectDropdown({ setFilters }) {
  const handleChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    setFilters(selectedOptions);
  };

  return (
    <select multiple={true} onChange={handleChange}>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}

export default MultiSelectDropdown;
