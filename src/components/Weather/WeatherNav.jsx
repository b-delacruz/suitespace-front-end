import { useEffect, useState } from 'react'
import WeatherSearchForm from '../Weather/WeatherSearchForm'

const WeatherNav = (props) => {

  return (
    <>
      <div>
        <h2>Weather | </h2>
        {/* <h2>{props.searchlocation.location.name}</h2> */}
        <WeatherSearchForm/>
      </div>
    </>
  );
}

export default WeatherNav;