import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/Theme-context';

const imageUrl = import.meta.env.VITE_IMG

const AnimationCard = ({ animation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <li
      className="animation-card animation-item"
      color={theme.color}
      background={theme.background_general_color}
      paragraph_color={theme.paragraph_color}
      button={theme.background_header_footer_color}
    >
      <img src={imageUrl + animation.poster_path} alt={animation.title} />
      <h3>{animation.title}</h3>
      {/* <p>
        <i className="fa-solid fa-star"></i>
        {movie.vote_average}
      </p> */}
    </li>
  );
};

export default AnimationCard;
