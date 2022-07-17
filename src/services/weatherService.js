const SERVER_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/weather`

async function getPref() {
  const res = await fetch(SERVER_URL)
  return res.json()
}

async function getCurrentDetails(location) {
  const res = await fetch(`${SERVER_URL}/${location}/current`)
}

async function getHourlyDetails(location) {
  const res = await fetch(`${SERVER_URL}/${location}/hourly`)
}

async function getDailyDetails(location) {
  const res = await fetch(`${SERVER_URL}/${location}/daily`)
}


export { getPref, getCurrentDetails, getHourlyDetails, getDailyDetails }