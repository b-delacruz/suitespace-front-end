import React from 'react';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './weather.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// const labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', 
// '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];


const WeatherDisplay = (props) => {

  let labels = []
  let hourData = []
  for (let i = 0; i < 24; i++) {
    labels.push(`${i}:00`)
  }

  if (props.weather?.forecast) {
    const day = props.weather.forecast.forecastday
    hourData = (day[0]).hour.map(hour => {
      return hour.temp_f
    })
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Hourly Forecast',
        data: hourData.map(hour => hour),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };





  return <Line className='weather-graph' options={options} data={data} />
}

export default WeatherDisplay
