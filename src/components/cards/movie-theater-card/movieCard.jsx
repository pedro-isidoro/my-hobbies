import React, { useState } from 'react'
import { Modal } from '../../modal/GenericModal';

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({movie}) => {
    const [openMovieModal, setOpenMovieModal] = useState(false)

  return (
    <li className="movie-card movie-item">
      <div className="poster">
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h3>{movie.original_title}</h3>
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
            {movie.title} <br /> <span>{movie.release_date}</span>
          </h3>
          <img src={imageUrl + movie.poster_path} alt={movie.title} />
          <div className="description">
            <h4>
              Avaliação Média -<i className="fa-solid fa-star"></i>
              <span>{movie.vote_average}</span>
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
