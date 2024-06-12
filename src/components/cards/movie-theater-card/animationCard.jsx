import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../contexts/Theme-context';
import { Modal } from '../../generic-modal/GenericModal';

const imageUrl = import.meta.env.VITE_IMG

const AnimationCard = ({ animation }) => {
  const { theme } = useContext(ThemeContext);
  const [openAnimationModal, setOpenAnimationModal] = useState(false);

  return (
    <li className="animation-card animation-item">
      <div className="poster">
        <img src={imageUrl + animation.poster_path} alt={animation.title} />
        <h3>{animation.original_title}</h3>
      </div>
      <div className="newMoreInfo">
        <p>Para mais Informações</p>
        <button onClick={() => setOpenAnimationModal(true)}>Click!</button>
      </div>
      <Modal
        isOpen={openAnimationModal}
        setModalClosed={() => setOpenAnimationModal(!openAnimationModal)}
      >
        <div className="animation-modal">
          <h3>
            {animation.title} <br /> <span>{animation.release_date}</span>
          </h3>
          <img src={imageUrl + animation.poster_path} alt={animation.title} />
          <div className="description">
            <h4>
              Avaliação Média -<i className="fa-solid fa-star"></i>
              <span>{animation.vote_average}</span>
            </h4>
            <div className="sinopse">
              <p>{animation.overview}</p>
            </div>
          </div>
        </div>
      </Modal>
    </li>
  );
};

export default AnimationCard;
