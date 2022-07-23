import * as tokenService from './tokenService'
const SERVER_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/bookmark`


async function create(bookmark) {
  console.log(bookmark)
  const obj = {img: bookmark.news.urlToImage, title: bookmark.news.title, description: bookmark.news.description, link: bookmark.news.url}
  const res = await fetch(SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(obj)
  })
	return await res.json()
}



export {
	create,
}