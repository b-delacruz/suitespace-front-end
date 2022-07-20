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

const Weather = (props) => {

  const getLocationInfo = async() => {

    if (props.user?.weather) {
      return await weatherService.getPref()
    } else if (weatherService.getLocationLocalStorage()) {
      return weatherService.getLocationLocalStorage()
    } else {
      return 'Boston'
    }
  }

  const getDisplayPref = async () => {

    if (props.user) {
      const pref = await weatherService.getPref()
      return pref.display
    } else {
      return 'today'
    }

  }

  const [searchLocation, setSearchLocation] = useState('boston')
  const [displayPref, setDisplayPref] = useState(/*getDisplayPref()*/)
  const [weather, setWeather] = useState({})

  // const [preference, setPreference] = useState(weatherService.getPref())

  useEffect(() => {
    try {
      weatherService.getWeatherDetails(searchLocation)
        .then(result => {
          setWeather(result)
        })
    } catch (error) {
      console.log(error)
    }

  }, [searchLocation])

  const handleSearchLocation = (formData) => {
    setSearchLocation(formData.query)
  }

  return (
    <>
      <div className='weather-container'>
        <WeatherNav className='weather-nav' weather={weather} handleSearchLocation={handleSearchLocation} />
        <div className='weather-body'>
          <WeatherGraph className='weather-graph' weather={weather} />
          <WeatherDisplay className='weather-display' weather={weather} displayPref={displayPref} />
        </div>
      </div>
    </>
  );
}

export default Weather;