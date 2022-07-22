import WeatherSearchForm from '../Weather/WeatherSearchForm'

const WeatherNav = (props) => {

  return (
    <>
      <div className='weather-nav'>
        <div className='weather-nav-name-container'>
          <h2 className='weather-nav-title | text-xl'>Weather | {props.weather.location?.name}</h2>
        </div>
        <WeatherSearchForm handleSearchLocation={props.handleSearchLocation} />
      </div>
    </>
  );
}

export default WeatherNav;