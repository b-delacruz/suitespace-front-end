import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { getNews } from "../../services/newsService";
import "./NewsFeed.css";
import NewsCard from "../../components/News/NewsCard";

const NewsFeed = (props) => {
  const [formData, setFormData] = useState({
    search: "",
  });

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await getNews()
      setNewsData(newsData.articles)
    }
    fetchNews()
  }, [])

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

	const handleSubmit = async evt => {
		evt.preventDefault()
    try{
      getNews(formData.search)
      .then(newsData => {
        setNewsData(newsData.articles)
      })
    } catch (error) {
      console.log(error);
    }
  };

  const { search } = formData;

  const isFormInvalid = () => {
    return !search;
  };

  return (
    <>
      <div className="news-container">
        <div className="news-nav | flex justify-between items-center">
          <h1 className="news-title | text-xl">News Feed</h1>
        <form autoCompete="off" onSubmit={handleSubmit} className='flex items-center'>
            <input
              type="text"
              name="search"
              placeholder="Search News"
              value={search}
              onChange={handleChange}
              className="news-button"
              required
            />
            <button type="submit" disabled={isFormInvalid()} className="ml-1">
            </button>
            <SearchIcon />
          </form>
        </div>
        <div className="news-body">
          {newsData.map((news, idx) => (
            <NewsCard news={news} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsFeed;
