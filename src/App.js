import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import React, { useState } from 'react'
import axios from 'axios'
import TopButtons from './components/TopButtons';
import TempAndDetails from './components/TempAndDetails';

function getBackgroundColor(temp) {
  if (temp < 50) {
    return 'blue-500';
  } else if (temp < 70) {
    return 'green-500';
  } else if (temp < 90) {
    return 'yellow-500';
  } else {
    return 'red-500';
  }
}

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=73bd8ace16e97d7e22e969d7aa5a967c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location...'
          type="text"
          className="gray-100 text-gray-800 rounded-md px-4 py-2 outline-none focus:ring focus:ring-blue-400"
        />
      </div>
      <div className={`container ${data.main ? getBackgroundColor(data.main.temp.toFixed()) : ''}`}>
        <div className={`top ${data.main ? getBackgroundColor(data.main.temp.toFixed()) + ' transition duration-500' : ''}`}>
          <div className="location text-white">
            <p className="text-lg font-medium">{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1 className="text-6xl font-bold">{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description text-white">
            {data.weather ? <p className="text-2xl">{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined &&
        <div className="bottom">
        <div className="feels">
          {data.main ? <p className='text-lg font-medium'>{data.main.feels_like.toFixed()}°F</p> : null}
          <p className="text-gray-500">Feels Like</p>
        </div>
        <div className="humidity">
          {data.main ? <p className='text-lg font-medium'>{data.main.humidity}%</p> : null}
          <p className="text-gray-500">Humidity</p>
        </div>
        <div className="wind">
          {data.wind ? <p className='text-lg font-medium'>{data.wind.speed.toFixed()} MPH</p> : null}
          <p className="text-gray-500">Wind</p>
        </div>
      </div>
    }
  </div>
</div>
  );
}

export default App;


