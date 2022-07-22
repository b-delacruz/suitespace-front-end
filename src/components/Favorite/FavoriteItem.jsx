import './favorite.css'

const FavoriteItem = ({ favorite, handleRemoveFavorite }) => {
  return (
    <div className='favorite-item'>
      <a href={favorite.link} target="_blank" rel="noopener noreferrer" className='flex items-center gap-3'>
        <h2>{favorite.name}</h2>
        <img style={{ height: '20px' }} src={favorite.link + '/favicon.ico'} alt="" />
      </a>
      <button
        className='favorite-remove-button'
        onClick={() => handleRemoveFavorite(favorite._id)}>
        x
      </button>
    </div>
  )
}

export default FavoriteItem
