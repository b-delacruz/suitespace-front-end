import * as tokenService from './tokenService'
const SERVER_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/favorites`

async function getAll() {
  const res = await fetch(`${SERVER_URL}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  return await res.json()
}

async function create(event) {
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

async function deleteFavorite(id) {
  const res = await fetch(`${SERVER_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
	return await res.json()
}

export {
	create,
  getAll,
  deleteFavorite,
}