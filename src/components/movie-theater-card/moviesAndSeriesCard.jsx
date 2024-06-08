import React from 'react'

const imageUrl = import.meta.env.VITE_IMG

const MoviesAndSeriesCard = ({movie}) => {
  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.vote}</p>
    </div>
  );
}

export default MoviesAndSeriesCard;
