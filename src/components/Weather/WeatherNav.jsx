import WeatherSearchForm from '../Weather/WeatherSearchForm'

const WeatherNav = (props) => {

  return (
    <>
      <div className='weather-nav'>
        <div className='weather-nav-name-container'>
          <h2>Weather | </h2>
          <h2>{props.weather.location.name}</h2>
        </div>
        <WeatherSearchForm handleSearchLocation={props.handleSearchLocation}/>
      </div>
    </>
  );
}

export default WeatherNav;