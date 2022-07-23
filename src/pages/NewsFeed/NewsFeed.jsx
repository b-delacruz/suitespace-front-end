import "./NewsFeed.css";
import NewsCard from "../../components/News/NewsCard";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { getNews } from "../../services/newsService";
import { Modal, Box, Backdrop, Fade } from "@mui/material";


const NewsFeed = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    try {
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 6,
    p: 4,
  };

  return (
    <>
      <div className="news-container">
        <div className="news-nav | flex justify-between items-center">
          <h1 className="news-title | text-xl">News Feed</h1>

          <button className='news-bookmark-button | flex justify-center items-center text-base rounded px-5' onClick={handleOpen}>
            Bookmarks
          </button>

          <Modal
            props={props}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 1000,
            }}
          >
            <Fade in={open}>
            <Box sx={style}>
          
         </Box>
        </Fade>
          </Modal>
          <form onSubmit={handleSubmit} className='flex items-center'>
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
            <NewsCard key={idx} news={news} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsFeed;
