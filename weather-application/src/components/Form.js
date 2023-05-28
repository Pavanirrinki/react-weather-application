import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"

const Form = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/weather/${city}`);
    setCity('');
  };

  return (
    <div className='App'>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
    <button class="button-34" role="button">Get weather</button>
    </form>
    </div>
  );
};

export default Form;
