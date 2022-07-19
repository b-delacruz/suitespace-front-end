import { useEffect, useState } from 'react'
import WeatherSearchForm from '../Weather/WeatherSearchForm'

const WeatherNav = (props) => {

  return (
    <>
      <div className='weather-nav'>
        <div className='weather-nav-name-container'>
          <h2>Weather | </h2>
          <h2>{props.searchLocation}</h2>
        </div>
        <WeatherSearchForm/>
      </div>
    </>
  );
}

export default WeatherNav;