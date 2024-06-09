import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/Theme-context';
import { Button } from '../generic-button/GenericButton';

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({movie}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <li
      className="movie-card movie-item"
      color={theme.color}
      background={theme.background_general_color}
      paragraph_color={theme.paragraph_color}
      button={theme.background_header_footer_color}
    >
      <div className="poster">
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h3>{movie.title}</h3>
      </div>
      <div className="newMoreInfomovie">
        <p>Para mais Informações</p>
        <Button>Click!</Button>
      </div>
      {/* <p>
        <i className="fa-solid fa-star"></i>
        {movie.vote_average}
      </p> */}
    </li>
  );
}

export default MovieCard;
