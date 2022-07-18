import WeatherDisplay from '../../components/Weather/WeatherDisplay'
import WeatherGraph from '../../components/Weather/WeatherGraph'
import WeatherNav from '../../components/Weather/WeatherNav'
import * as weatherService from '../../services/weatherService'
import * as locationService from '../../services/locationService'
import { useEffect, useState } from 'react'

const Weather = (props) => {

  // Weather States for all 3 data
  const [weatherCurrent, setWeather] = useState({})
  const [weatherHourly, setWeatherHourly] = useState({})
  const [weatherDaily, setWeatherDaily] = useState({})

  // Location state different from preference
  const [searchLocation, setSearchLocation] = useState({})

  useEffect(()=>{
    if(props.user){
      const pref = weatherService.getPref()
      console.log(pref)
    }
    const fetchWeatherDetails = async () => {
      const weather = await weatherService.getCurrentDetails('boston')
      console.log(weather)
    }
    fetchWeatherDetails()
    
  })

  const handleLocationSearch = (formData) => {
    
  }

  return (
    <>
      <div>
        <WeatherNav/>
        <WeatherGraph/>
        <WeatherDisplay/>
      </div>
    </>
  );
}

export default Weather;