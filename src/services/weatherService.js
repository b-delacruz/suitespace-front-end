import * as tokenService from './tokenService'
const SERVER_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/weather`

async function getWeatherPref() {
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
  getWeatherPref, 
  getWeatherDetails,
  updateWeatherPref 
}