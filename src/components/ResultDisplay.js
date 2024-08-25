// frontend/src/components/ResponseDisplay.js
import React, { useState } from 'react';

const ResponseDisplay = ({ response }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value) ? prev.filter((option) => option !== value) : [...prev, value]
    );
  };

  const filteredResponse = Object.keys(response).reduce((acc, key) => {
    if (selectedOptions.includes(key)) {
      acc[key] = response[key];
    }
    return acc;
  }, {});

  return (
    <div>
      <div>
        <label>
          <input
            type='checkbox'
            value='alphabets'
            onChange={handleOptionChange}
          />
          Alphabets
        </label>
        <label>
          <input
            type='checkbox'
            value='numbers'
            onChange={handleOptionChange}
          />
          Numbers
        </label>
        <label>
          <input
            type='checkbox'
            value='highest_lowercase_alphabet'
            onChange={handleOptionChange}
          />
          Highest Lowercase Alphabet
        </label>
      </div>

      <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
    </div>
  );
};

export default ResponseDisplay;
