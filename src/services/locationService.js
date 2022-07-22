import * as tokenService from './tokenService'
const SERVER_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function updateLocation(user,newlocation) {
  const res = await fetch(`${SERVER_URL}/${user.profile}/location`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify({location:newlocation})
  })
	return res.json()
}

async function getLocation() {
  const res = await fetch(`${SERVER_URL}/location`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
  })
  return res.json()
}

export { getLocation,updateLocation }