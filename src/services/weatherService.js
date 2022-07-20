import * as tokenService from './tokenService'
const SERVER_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/weather`

function setLocationLocalStorage(location) {
  localStorage.setItem('location', location)
}

function getLocationLocalStorage(){
  return localStorage.getItem('location')
}

async function getPref() {
  const res = await fetch(`${SERVER_URL}/preference`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
  })
  return res.json()
}

async function getWeatherDetails(location) {
  const res = await fetch(`${SERVER_URL}/${location}`)
  return res.json()
}

async function createWeatherPref(location) {
  const res = await fetch(SERVER_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(location)
  })
  return res.json()
}

async function updateWeatherPref(location) {
  const res = await fetch(`${SERVER_URL}/${location._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(location)
  })
	return res.json()
}

export { 
  getPref, 
  getWeatherDetails,
  setLocationLocalStorage, 
  getLocationLocalStorage,
  createWeatherPref,
  updateWeatherPref 
}