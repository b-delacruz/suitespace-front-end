// function getNews(search) {
//   return fetch(`/api/news/${search}`)
//   .then(res => res.json())
// }

// export {
//   getNews
// }

export async function getNews (search) {
  const res = await fetch(`http://localhost:3001/api/news/${search}`)
  const data =  await res.json()
  console.log(data)
  return data
}