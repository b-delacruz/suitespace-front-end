// function getNews(search) {
//   return fetch(`/api/news/${search}`)
//   .then(res => res.json())
// }

// export {
//   getNews
// }
const baseUrl = `${process.env.REACT_APP_BACK_END_SERVER_URL}`

export async function getNews (search) {
  const res = await fetch(`${baseUrl}/api/news/${search}`)
  const data =  await res.json()
  console.log(data)
  return data
}