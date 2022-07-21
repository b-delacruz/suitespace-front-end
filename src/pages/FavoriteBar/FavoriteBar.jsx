import * as favoriteService from '../../services/favoriteService'

//* React Hooks *//
import { useState, useEffect } from "react";

//* Package Imports *//
import { Modal, Box, Typography } from "@mui/material";

//* Components *//
import FavoriteItem from "../../components/Favorite/FavoriteItem"
import AddFavoriteItem from "../../components/Favorite/AddFavoriteItem"

const FavoriteBar = ({ user, favorites, setFavorites }) => {

  console.log(favorites)

  const maxLength = 8
  const currentLength = (typeof favorites === 'undefined' ? 0 : favorites.length)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  },[setFavorites]);

  const handleAddFavorite = async (newFavoriteItem) => {
    const newFavorite = await favoriteService.create(newFavoriteItem)
    setFavorites(newFavorite)
    setOpen(false)

  }

  const handleRemoveFavorite = async (id) => {
    const deletedFavorite = await favoriteService.deleteFavorite(id);
    const newFavoriteArray = favorites.filter(
      (favorite) => favorite._id !== deletedFavorite._id
    );
    setFavorites(newFavoriteArray);
  }

  return (
    <>
      <div>
        <h1>Favorites</h1>
        <div>
          {0 < currentLength && currentLength < maxLength &&
            <>
              {favorites.map((favorite, idx) =>
                <FavoriteItem
                  key={idx}
                  user={user}
                  favorite={favorite}
                  handleRemoveFavorite={handleRemoveFavorite}
                />
              )}
              <button
                onClick={handleOpen}
              >
                +
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
              >
                <Box sx={style}>
                  <Typography id='modal-modal-title' variant='h6' component='h2'>
                    Add Favorite
                  </Typography>
                  <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                    <AddFavoriteItem
                      handleAddFavorite={handleAddFavorite}
                    />
                  </Typography>
                </Box>
              </Modal>
            </>
          }
          {currentLength >= maxLength &&
            <>
              {favorites.map((favorite, idx) =>
                <FavoriteItem
                  key={idx}
                  user={user}
                  favorite={favorite}
                />
              )}
            </>
          }
        </div>
      </div>
    </>
  );
}

export default FavoriteBar;