import { useEffect } from "react";
import "./weather.css";

const WeatherDisplay = ({ weather }) => {
  useEffect(() => { });

  const weatherForecastTomorrow = weather.forecast?.forecastday[1]
  const weatherForecastOvermorrow = weather.forecast?.forecastday[2]

  return (
    <>
      <div className="weather-display-container">
        {/* Current*/}
        <h2>Currently</h2>
        <div className="='weather-content-top">
          <div className="weather-content">
            <img
              className="weather-content-image"
              src={weather.current?.condition.icon}
              alt=""
            />
            <h2>{weather.current?.condition.text}</h2>
            <h1>
              {weather.current?.temp_f}
              <span>&#176;</span>
            </h1>
          </div>

          {/* Data info */}
          <div className="weather-data">
            <div className="weather-data-item">
              <h4 className="weather-data-item-header">Last Updated</h4>
              {weather.current?.last_updated.slice(10, 16)}
            </div>
            <div className="weather-data-item">
              <h4 className="weather-data-item-header">Humidity</h4>
              {weather.current?.humidity}
            </div>
            <div className="weather-data-item">
              <h4 className="weather-data-item-header">UV</h4>
              {weather.current?.uv}
            </div>
          </div>
        </div>



        {/*  Bottom weather display */}
        <div className="weather-content-bottom">
          {/*  Tomorrow */}
          <h2>Tomorrow</h2>
          <div className="weather-content">
            <img
              className="weather-content-image"
              src={weatherForecastTomorrow?.day.condition.icon}
              alt=""
            />
            <h2>{weatherForecastTomorrow?.day.condition.text}</h2>
            <h1>
              {weatherForecastTomorrow?.day.avgtemp_f}
              <span>&#176;</span>
            </h1>
          </div>
          {/*  Overmorrow */}
          <h2>Overmorrow</h2>
          <div className="weather-content">
            <img
              className="weather-content-image"
              src={weatherForecastOvermorrow?.day.condition.icon}
              alt=""
            />
            <h2>{weatherForecastOvermorrow?.day.condition.text}</h2>
            <h1>
              {weatherForecastOvermorrow?.day.avgtemp_f}
              <span>&#176;</span>
            </h1>
          </div>

        </div>

      </div>
    </>
  );
};

export default WeatherDisplay;
