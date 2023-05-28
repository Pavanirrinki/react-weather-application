import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Weather from './components/Weather';

//This is the simple react-weather-application using openweather api with some beginner level css

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Weather Application</h1>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/weather/:city" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
