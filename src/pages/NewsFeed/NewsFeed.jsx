import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { getNews } from '../../services/newsService';
import './NewsFeed.css'



const NewsFeed = (props) => {
  const [formData, setFormData] = useState({
    search:''
  })

  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await getNews()
      console.log(newsData.response.results)
      setNewsData(newsData.response.results.slice(0,3))
    }
    fetchNews()
  }, [])

  const handleChange = evt => {
		setFormData({ 
      ...formData, 
      [evt.target.name]: evt.target.value })
	}

	const handleSubmit = async evt => {
		evt.preventDefault()
    try{
      getNews(formData.search)
      .then(newsData => {
        console.log(newsData.response.results)
        setNewsData(newsData.response.results)
      })
    } catch (error) {
      console.log(error)
    }
	}

  const { search } = formData

  const isFormInvalid = () => {
    return !(search)
  }

  return (
    <>
      <h2>News</h2>
      <div className="news">
      <form 
      autoComplete="off" 
      onSubmit={handleSubmit}
      >
        <div className="news-body">
          <input 
          type="text"
          name="search"
          placeholder='Search News'
          value={search}
          onChange={handleChange}
          className='news-button'
          required
          />
        <button 
        type="submit" 
        disabled={isFormInvalid()}
        >
          <SearchIcon/>
        </button>
        </div>    
      </form>
      <div className='news-body'>
      {newsData.map(news =>
        <div className='news-totl' key={news.id}>
          <p> {news.webTitle}</p>
        </div> 
      )}
      </div>
      </div>
    </>
  )
}

export default NewsFeed;