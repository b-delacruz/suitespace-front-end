import * as favoriteService from "../../services/favoriteService";
import "./favorite.css";

//* React Hooks *//
import { useState, useEffect } from "react";

//* Package Imports *//
import { Modal, Box, Typography, Backdrop, Fade } from "@mui/material";

//* Components *//
import FavoriteItem from "../../components/Favorite/FavoriteItem";
import AddFavoriteItem from "../../components/Favorite/AddFavoriteItem";

const FavoriteBar = ({ user }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [favorites, setFavorites] = useState([]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    p: 4,
    color: "white",
  };

  //* useEffect *//
  useEffect(() => {
    const fetchAllFavorites = async () => {
      const favoriteData = await favoriteService.getAll();
      setFavorites(favoriteData);
    };
    fetchAllFavorites();
  }, []);

  const handleAddFavorite = async (newFavoriteItem) => {
    const newFavorite = await favoriteService.create(newFavoriteItem);
    setFavorites([...favorites, newFavorite]);
    handleClose();
  };

  const handleRemoveFavorite = async (id) => {
    const deletedFavorite = await favoriteService.deleteFavorite(id);
    const newFavoriteArray = favorites.filter(
      (favorite) => favorite._id !== deletedFavorite._id
    );
    setFavorites(newFavoriteArray);
  };

  const maxLength = 8;
  const currentLength = typeof favorites === "undefined" ? 0 : favorites.length;
  return (
    <>
      <div className="favorite-container">
        <h1>Favorites</h1>
        <div className="favorite-item-container">
          {0 === currentLength && (
            <>
              <button className="favorite-item-add-button" onClick={handleOpen}>
                +
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 1000,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Add Favorite
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <AddFavoriteItem handleAddFavorite={handleAddFavorite} />
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </>
          )}
          {0 < currentLength && currentLength < maxLength && (
            <>
              {favorites.map((favorite, idx) => (
                <FavoriteItem
                  key={idx}
                  user={user}
                  favorite={favorite}
                  handleRemoveFavorite={handleRemoveFavorite}
                />
              ))}
              <button className="favorite-item-add-button" onClick={handleOpen}>
                +
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 1000,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Add Favorite
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      component={'span'}
                      sx={{ mt: 2 }}
                    >
                      <AddFavoriteItem
                        handleAddFavorite={handleAddFavorite}
                        handleClose={handleClose}
                      />
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </>
          )}
          {currentLength >= maxLength && (
            <>
              {favorites.map((favorite, idx) => (
                <FavoriteItem
                  key={idx}
                  user={user}
                  favorite={favorite}
                  handleRemoveFavorite={handleRemoveFavorite}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FavoriteBar;
