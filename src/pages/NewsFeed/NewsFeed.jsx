import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { getNews } from '../../services/newsService';
import './NewsFeed.css'
import NewsCard from '../../components/News/NewsCard';



const NewsFeed = (props) => {
  const [formData, setFormData] = useState({
    search:''
  })

  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await getNews()
      setNewsData(newsData.articles.slice(0,10))
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
        setNewsData(newsData.articles.slice(0,10))
      })
    } catch (error) {
      console.log(error)
    }
	}

  const { search } = formData

  const isFormInvalid = () => {
    return !(search)
  }

  const getFontSize = (textLength) => {
    const baseSize = 8
    if (textLength >= baseSize) {
      textLength = baseSize - 1
    }
    const fontSize = baseSize - textLength
    return `${fontSize}vw`
  }
  
  const boxes = document.querySelectorAll('.box p')
    
  boxes.forEach(box => {
    box.style.fontSize = getFontSize(box.textContent.length)
  })
  return (
    <>
      <div className="news-container">
        <div className="news-nav | flex justify-between items-center">
          <h1 className='news-title | text-xl'>News Feed</h1> 
          <form 
          autoComplete="off" 
          onSubmit={handleSubmit}
          >
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
              className="ml-1"
            >
              <SearchIcon/>
            </button>
          </form>
        </div>
        <div className='news-body'>
          {newsData.map((news, idx) =>
          <div className='news-card |' key={idx}>
            <NewsCard news={news} />
          </div> 
          )}
        </div>
      </div>
    </>
  )
}

export default NewsFeed;