import "./NewsCard.css";
import { useState } from 'react';
import * as bookmarkService from '../../services/bookmarkService.js'
import IconButton from '@mui/material/IconButton';
import TurnedInNotSharpIcon from '@mui/icons-material/TurnedInNotSharp';

function NewsCard(props) {

  const [bookmarkData, setBookmarkData] = useState(props)

  const addBookmark = async () => {
    const bookmark = await bookmarkService.create(bookmarkData)
 
  }
  return (
    <>
      <div className="news-card">
        <div className="news-card-image-container">
          <a href={props.news.url}>
            <img
              src={
                props.news.urlToImage
                  ? props.news.urlToImage
                  : "https://i.imgur.com/QoMTW46.jpg"
              }
              alt="news-article"
              className="news-card-image"
            />
            {/* BUGGGG WITH SPAN BACKGROUND NOT CLICKABLE */}
          </a>
          <span className="news-card-image-learnmore">
            <a href={props.news.url} target="_blank" rel="noopener noreferrer">Learn More</a>
          </span>
        </div>
        <div className="news-card-description-container">
          <div className="news-card-description-header | text-lg">
            {props.news.title?.split(".").splice(0, 1).join(" ")}
          </div>
          <div className="news-card-description-body | text-sm">
            {props.news.description?.split(".").splice(0, 1).join(" ")}.
          </div>
        </div>
        <div>
          <IconButton onClick={addBookmark} aria-label="bookmark">
            <TurnedInNotSharpIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default NewsCard