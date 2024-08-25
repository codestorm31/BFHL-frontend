// frontend/src/components/InputForm.js
import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({ setResponse }) => {
  const [inputData, setInputData] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(inputData);
      const response = await axios.post('http://localhost:5000/bfhl', { data: parsedData.data });
      setResponse(response.data);
      setError('');
    } catch (err) {
      setError('Invalid JSON input or server error');
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder='Enter JSON input here...'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default InputForm;
