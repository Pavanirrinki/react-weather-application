import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
const data = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=7caa958dd8bdf096f327cb6c6b228900&units=metric`
        );
        setWeatherData(response.data);
        console.log("data",weatherData)
        setLoading(false);
      } catch (error) {
        alert('Please enter city correctly');
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
//     <div className='App'>
//       <h2>Weather Information for {data.city}</h2>
//       <img src="https://static01.nyt.com/images/2014/12/11/technology/personaltech/11machin-illo/11machin-illo-superJumbo-v3.jpg?quality=75&auto=webp" 
//       style={{width:"200px",height:"200px"}}/>
//       <div class="temperature-container">
//     <h4 class="temperature-label">Temperature:</h4>
//     <span>{weatherData.main.temp}°C</span>
// </div>


// <div class="temperature-container">
//     <h4 class="temperature-label">Wind:</h4>
//     <span>{weatherData.wind.speed} km/h</span>
// </div>
//      {weatherData.weather.map((weather) => (
//             <div key={weather.id}>
//               <div class="temperature-container">
//     <h4 class="temperature-label">Weather condition:</h4>
//     <span>{weather.main}</span>
// </div>
// <div class="temperature-container">
//     <h4 class="temperature-label">Description:</h4>
//     <span>{weather.description}</span>
// </div>
              
//             </div>
//           ))}
//     </div>




<div class="card">
  <div class="content">
    <div class="top">
      <p>Orange</p>
      <div class="color"></div>
    </div>
    <div class="middle">
      <div>
       
        <p style={{textTransform:"uppercase"}}>{data.city}</p>
      </div>
      <img src="https://th.bing.com/th/id/R.0881a4842db0ca10db7505b5d822499c?rik=1CjA9jwWVqHaCQ&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f25-257598_weather-forecasting-symbol-weather-clip-art.png&ehk=YfH%2b8vAxm8zvc8oMKn96aFTf%2fZyjxi5dlJSuwhO6nuQ%3d&risl=&pid=ImgRaw&r=0" />
    </div>
    <div class="bottom">
      <div>
        <p style={{marginRight:"20px"}} >Temp.</p>
        <p>{weatherData.main.temp}°C</p>
      </div>
      <div>
        <p style={{marginRight:"20px"}}> Wind</p>
        <p>{Math.round(weatherData.wind.speed)} km/h</p>
      </div>
      {weatherData?.weather?.map((weather)=>(
      <><div>

              <p style={{ marginRight: "20px" }}>Condition</p>
              <p>{weather.main}</p>
          </div><div>
                  <p>Description</p>
                  <p>{weather.description}</p>
              </div></>
      ))}
    </div>
  </div>
</div>





  );
};

export default Weather;
