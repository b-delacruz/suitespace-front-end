import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { getNews } from '../../services/newsService';


const NewsFeed = () => {
  const [formData, setFormData] = useState({
    search:''
  })

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
        console.log(newsData)
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

      <form 
      autoComplete="off" 
      onSubmit={handleSubmit}
      >
        <div className="form-group mb-3">
          <input 
          type="text"
          name="search"
          placeholder='Search News'
          value={search}
          onChange={handleChange}
          />
        <button type="submit" disabled={isFormInvalid()}>
          <SearchIcon/>
        </button>
        </div>    
      </form>
    </>
  )
}

export default NewsFeed;