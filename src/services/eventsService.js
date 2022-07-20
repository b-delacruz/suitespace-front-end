import * as tokenService from './tokenService'
const SERVER_URL = 'http://localhost:3001/api/calendars'

async function create(event) {
  console.log(event)
  const res = await fetch(SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(event)
  })
	return await res.json()
}

async function getAll() {
  const res = await fetch(SERVER_URL)
  return await res.json()
}

export {
	create,
  getAll,
}