import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Texts from './components/Texts';
import Searchbar from './components/Searchbar';
import Card from './components/Card';

const App = () =>{

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  

  const getWeather = async (city) => {
    try {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_KEY}&units=metric`;

      const response = await fetch(url);

      const data = await response.json();

      console.log(data);

      setWeather(data);

    } catch (error) {
      console.log("Error:", error);
    }
  };

  const getForecast = async (city) => {
    try{
      const url =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_APP_KEY}&units=metric`;

      const response = await fetch(url);

      const data = await response.json();

      console.log(data);

      setForecast(data.list);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getWeather("New York");
    getForecast("New York");
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <div
        className="fixed inset-0 -z-10 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-rainy-weather-image_795021.jpg")`,
        }}
      >
      </div>
        <Texts />
        <Searchbar getWeather={getWeather} getForecast={getForecast} />
        <Card weather={weather} forecast={forecast}/>
    </div>
  );
};

export default App;