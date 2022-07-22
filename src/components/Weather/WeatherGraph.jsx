import React from 'react';
import { Line } from 'react-chartjs-2';
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

const WeatherDisplay = (props) => {

  let labels = []
  let hourData = []

  if (props.weather?.forecast) {
    const day = props.weather.forecast.forecastday
    hourData = (day[0]).hour.map(hour => {
      return hour.temp_f
    })

    for (let i = 0; i < 24; i++) {
      labels.push(`${i}:00`)
    }
  }

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: 'white',
          font: {
            size: 20,
            family: 'Sora',
          }
        }
      },
      y: {
        ticks: {
          color: '#F2D3AB',
          font: {
            size: 20,
            family: 'Sora'
          },
        },
      }
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white'
        }
      },
      title: {
        display: true,
        text: 'Temperature',
        color: 'white',
        font: {
          size: 30,
          family: 'Sora'
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Hourly Forecast',
        data: hourData.map(hour => hour),
        borderColor: '#F2D3AB',
        lineTension: 0.5,
        borderWidth: 5,
        backgroundColor: '#F2D3AB',
        font: {
          size: 30,
          family: 'Sora'
        },
      }
    ],

  };

  return (
    <Line className='weather-graph' options={options} data={data} />
  )
}

export default WeatherDisplay
