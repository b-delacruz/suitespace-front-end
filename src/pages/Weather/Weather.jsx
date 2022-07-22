// Components
import WeatherDisplay from '../../components/Weather/WeatherDisplay'
import WeatherGraph from '../../components/Weather/WeatherGraph'
import WeatherNav from '../../components/Weather/WeatherNav'

// Services
import * as weatherService from '../../services/weatherService'
import * as locationService from '../../services/locationService'

// React
import { useState } from 'react'

// CSS
import './weather.css'

const Weather = ({user,setSearchLocation,weather}) => {


  const getWeatherDisplayDetails = async () => {
    const weatherDisplayDetail = await weatherService.getWeatherPref()
    setWeatherDisplay(weatherDisplayDetail)
  }

  
  const [weatherDisplay, setWeatherDisplay] = useState(getWeatherDisplayDetails)

  const handleSearchLocation = async (formData) => {
    if (user){
      const updateLocation = await locationService.updateLocation(user, formData.query)
    }
    setSearchLocation(formData.query)
  }

  return (
    <>
      <div className='weather-container'>
        <WeatherNav className='weather-nav' weather={weather} handleSearchLocation={handleSearchLocation} />
        <div className='weather-body'>
          <WeatherGraph className='weather-graph' weather={weather} />
          <WeatherDisplay className='weather-display' weather={weather} weatherDisplay={weatherDisplay} />
        </div>
      </div>
    </>
  );
}

export default Weather;