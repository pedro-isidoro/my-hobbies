import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme-context";

const imageUrl = import.meta.env.VITE_IMG;

const SerieCard = ({ movie }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="serie-card"
      color={theme.color}
      background={theme.background_general_color}
      paragraph_color={theme.paragraph_color}
      button={theme.background_header_footer_color}
    >
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h3>{movie.name}</h3>
      {/* <p>
        <i className="fa-solid fa-star"></i>
        {movie.vote_average}
      </p> */}
    </div>
  );
};

export default SerieCard;
