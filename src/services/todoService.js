import * as tokenService from './tokenService'
const SERVER_URL = 'http://localhost:3001/api/todos'

async function create(todo) {
  console.log(todo)
  const res = await fetch(SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(todo)
  })
	return await res.json()
}


// ----------------NEED TO READJUST PROTECTED ROUTES----------------

async function getAll() {
  const res = await fetch(SERVER_URL)
  return await res.json()
}

export {
	create,
  getAll
}