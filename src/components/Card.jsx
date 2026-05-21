import React from 'react';
import { MapPin } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { CloudSun } from 'lucide-react';
import { Wind } from 'lucide-react';
import { Droplets } from 'lucide-react';

const Card = ({weather , forecast}) => {

   if (!weather) {
    return (
      <h1 className="text-white text-center mt-10 text-2xl">
        Loading...
      </h1>
    );
  }
  
  return (
    <div className="w-full flex justify-center px-4 mt-8 mb-5">
      <div className="bg-slate-800 text-white p-6 rounded-xl w-full max-w-md text-center shadow-lg">
        
        <div className="flex items-start justify-between">
          <div>
            <MapPin />
            <h1 className="text-xl font-bold mb-2">{weather.name}</h1>
          </div>
          <div>  
            <div className='flex gap-1.5'>
           <Calendar/> <p> MONDAY </p>
            </div>
            <div>
            <p>19/04/2026 </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <CloudSun size={130} className="mx-auto mb-2" />
            <p className="mt-4">Condition: {weather.weather[0].description}</p>
          </div>
          <div className='mt-5'>
            <h2 className="text-5xl font-bold mb-2">{weather.main.temp}°C</h2>
          </div>
        </div>
          <div className="flex justify-around mt-8">
            <div>
              <Droplets />
              <p>Humidity: {weather.main.humidity} %</p>
            </div>
            <div>
              <Wind />
              <p>Wind: {weather.wind.speed} km/h</p>
            </div>
          </div>        
        </div>

        <div className='flex justify-center ml-4'>
    <div className='bg-slate-800 text-white p-6 rounded-xl w-full max-w-md text-center shadow-lg'>
    <div className='flex flex-col justify-around'>
      {forecast
        ?.filter((item, index) => index % 8 === 0)
        ?.slice(0, 6)
        ?.map((item, index) => (

          <div
            key={index}
            onClick={() => console.log(item)}
            className='flex flex-row justify-between gap-5 mb-6 bg-slate-600 p-3 rounded-xl cursor-pointer'
          >

            <h3>
              {new Date(item.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </h3>

            <div>
              <CloudSun />
            </div>

            <p>
              {Math.round(item.main.temp)}°C
            </p>

            </div>

          ))}

        </div>

      </div>
      </div>
    </div>
    
  );
};

export default Card;
