const SERVER_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/weather`

function setLocationLocalStorage(location) {
  localStorage.setItem('location', location)
}

function getLocationLocalStorage(){
  return localStorage.getItem('location')
}

async function getPref() {
  const res = await fetch(`${SERVER_URL}/preference}`)
  return res.json()
}

async function getCurrentDetails(location) {
  const res = await fetch(`${SERVER_URL}/${location}/current`)
  return res.json()
}

async function getHourlyDetails(location) {
  const res = await fetch(`${SERVER_URL}/${location}/hourly`)
  return res.json()
}

async function getDailyDetails(location) {
  const res = await fetch(`${SERVER_URL}/${location}/daily`)
  return res.json()
}


export { 
  getPref, 
  getCurrentDetails, 
  getHourlyDetails, 
  getDailyDetails, 
  setLocationLocalStorage, 
  getLocationLocalStorage 
}