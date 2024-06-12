import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../contexts/Theme-context";
import { Modal } from "../../generic-modal/GenericModal";

const imageUrl = import.meta.env.VITE_IMG;

const SerieCard = ({serie}) => {
  const { theme } = useContext(ThemeContext);
  const [openSerieModal, setOpenSerieModal] = useState(false);

  return (
    <li className="serie-card serie-item">
      <div className="poster">
        <img src={imageUrl + serie.poster_path} alt={serie.name} />
        <h3>{serie.original_name}</h3>
      </div>
      <div className="newMoreInfo">
        <p>Para mais Informações</p>
        <button onClick={() => setOpenSerieModal(true)}>Click!</button>
      </div>
      <Modal
        isOpen={openSerieModal}
        setModalClosed={() => setOpenSerieModal(!openSerieModal)}
      >
        <div className="serie-modal">
          <h3>
            {serie.name} <br /> <span>{serie.first_air_date}</span>
          </h3>
          <img src={imageUrl + serie.poster_path} alt={serie.name} />
          <div className="description">
            <h4>
              Avaliação Média -<i className="fa-solid fa-star"></i>
              <span>{serie.vote_average}</span>
            </h4>
            <div className="sinopse">
              <p>{serie.overview}</p>
            </div>
          </div>
        </div>
      </Modal>
    </li>
  );
};

export default SerieCard;
