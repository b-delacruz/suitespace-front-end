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
    return 'Boston'
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

  const [searchLocation, setSearchLocation] = useState( getLocationInfo() )
  const [displayPref, setDisplayPref] = useState( getDisplayPref() )
  const [weather, setWeather] = useState({})

  // const [preference, setPreference] = useState(weatherService.getPref())

  useEffect(()=>{
    try{
      weatherService.getWeatherDetails(searchLocation)
      .then(result => {
        setWeather(result)
      })
    } catch(error) {
      console.log(error)
    }

  },[searchLocation])

  const handleSearchLocation = (formData) => {
    setSearchLocation(formData.query)
  }

  return (
    <>
      <div className='weather-container'>
        <WeatherNav className='weather-nav' weather={weather} handleSearchLocation={handleSearchLocation}/>
        <div className='weather-body'>
          <WeatherGraph className='weather-graph' weather={weather}/>
          <WeatherDisplay className='weather-display'/>
        </div>
      </div>
    </>
  );
}

export default Weather;