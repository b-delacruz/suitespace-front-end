import WeatherDisplay from '../../components/Weather/WeatherDisplay'
import WeatherGraph from '../../components/Weather/WeatherGraph'
import WeatherNav from '../../components/Weather/WeatherNav'
import * as weatherService from '../../services/weatherService'
import * as locationService from '../../services/locationService'
import { useEffect, useState } from 'react'

const Weather = (props) => {

  // Weather States for all 3 data
  const [weatherCurrent, setWeatherCurrent] = useState({})
  const [weatherHourly, setWeatherHourly] = useState({})
  const [weatherDaily, setWeatherDaily] = useState({})

  // Location state different from preference
  const [searchLocation, setSearchLocation] = useState( props.user ? weatherService.getPref() : 'New York' )

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