const baseUrl = `${process.env.REACT_APP_BACK_END_SERVER_URL}`

export async function getNews (search) {
  const res = await fetch(`${baseUrl}/api/news/${search}`)
  const data =  await res.json()
  console.log(data)
  return data
}