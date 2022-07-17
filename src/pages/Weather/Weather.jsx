import WeatherDisplay from '../../components/Weather/WeatherDisplay'
import WeatherGraph from '../../components/Weather/WeatherGraph'
import WeatherNav from '../../components/Weather/WeatherNav'
import * as weatherService from '../../services/weatherService'
import * as locationService from '../../services/locationService'
import { useEffect, useState } from 'react'

const Weather = (props) => {

  const [weather, setWeather] = useState({})
  const [weatherForecast, setWeatherForecast] = useState({})

  useEffect(()=>{

  })

  const handleLocationSearch = (location) => {

  }

  return (
    <>
      <div>

      </div>
    </>
  );
}

export default Weather;