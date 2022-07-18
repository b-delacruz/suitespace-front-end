// Components
import WeatherDisplay from '../../components/Weather/WeatherDisplay'
import WeatherGraph from '../../components/Weather/WeatherGraph'
import WeatherNav from '../../components/Weather/WeatherNav'

// Services
import * as weatherService from '../../services/weatherService'
import * as locationService from '../../services/locationService'

// React
import { useEffect, useState } from 'react'

// CSS
import './weather.css'

const getLocationInfo = () => {

  const pref = weatherService.getPref()
  if(pref && pref.location?.area) {
    return pref
  } else if (weatherService.getLocationLocalStorage()) {
    return weatherService.getLocationLocalStorage()
  } else {
    return 'New York'
  }
}

const getDisplayPref = () => {

  const pref = weatherService.getPref()

  if(pref && pref.weather?.display) {
    return pref.display
  } else {
    return 'today'
  }

}

const Weather = (props) => {

  // Weather States for all 3 data
  const [weatherCurrent, setWeatherCurrent] = useState({})
  const [weatherHourly, setWeatherHourly] = useState({})
  const [weatherDaily, setWeatherDaily] = useState({})

  // Location state different from preference
  const [searchLocation, setSearchLocation] = useState( getLocationInfo() )
  const [displayPref, setDisplayPref] = useState( getDisplayPref() )

  useEffect(()=>{
    const fetchWeatherDetails = async () => {
      const weatherCurrentDetail = await weatherService.getCurrentDetails(searchLocation)
      const weatherHourlyDetail = await weatherService.getHourlyDetails(searchLocation)
      const weatherDailyDetail = await weatherService.getDailyDetails(searchLocation)
      setWeatherCurrent(weatherCurrentDetail)
      setWeatherHourly(weatherHourlyDetail)
      setWeatherDaily(weatherDailyDetail)
    }
    fetchWeatherDetails()
    
  },[searchLocation])

  const handleLocationSearch = (formData) => {
    
  }

  return (
    <>
      <div className='weather-container'>
        <WeatherNav className='weather-nav'/>
        <WeatherGraph className='weather-graph'/>
        <WeatherDisplay className='weather-display'/>
      </div>
    </>
  );
}

export default Weather;