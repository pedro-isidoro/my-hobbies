import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../contexts/Theme-context';
import { Modal } from '../../generic-modal/GenericModal';

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({movie}) => {
  const { theme } = useContext(ThemeContext);
    const [openMovieModal, setOpenMovieModal] = useState(false)

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
      <div className="newMoreInfo">
        <p>Para mais Informações</p>
        <button onClick={() => setOpenMovieModal(true)}>Click!</button>
      </div>
      <Modal
        isOpen={openMovieModal}
        setModalClosed={() => setOpenMovieModal(!openMovieModal)}
      >
        <div className="movie-modal">
          <h3>
            {movie.title} <br /> {movie.release_date}
          </h3>
          <img src={imageUrl + movie.poster_path} alt={movie.title} />
          <div className="description">
            <h4>
              Avaliação Média -<i className="fa-solid fa-star"></i>
              {movie.vote_average}
            </h4>
            <div className="sinopse">
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </Modal>
    </li>
  );
}

export default MovieCard;
