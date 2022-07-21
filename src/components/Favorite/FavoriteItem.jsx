import * as React from 'react';
import './favorite.css'

const FavoriteItem = ({ favorite, handleRemoveFavorite }) => {
  return (
    <div className='favorite-item'>
      <a href={favorite.link} target="_blank" rel="noopener noreferrer">
        <h2>{favorite.name}</h2>
        <img src={favorite.link + '/favicon.ico'} alt="" />
      </a>
      <button
        className='favorite-remove-button'
        onClick={() => handleRemoveFavorite(favorite._id)}>
        Remove
      </button>

    </div>
  )
}

export default FavoriteItem
