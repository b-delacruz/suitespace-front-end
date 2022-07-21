import * as React from 'react';

const FavoriteItem = ({favorite}) => {
  return (
    <div>
      <h2>{favorite.name}</h2>
      <iframe title={favorite.name} src={favorite.link} frameborder="0"></iframe>
    </div>
  )
}

export default FavoriteItem
