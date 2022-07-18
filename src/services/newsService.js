// function getNews(search) {
//   return fetch(`/api/news/${search}`)
//   .then(res => res.json())
// }

// export {
//   getNews
// }
const baseUrl = "http://localhost:3001"

export async function getNews (search) {
  const res = await fetch(`${baseUrl}/api/news/${search}`)
  const data =  await res.json()
  console.log(data)
  return data
}