import React, { useEffect, useState } from "react";
import { Button } from "../../generic-button/GenericButton";
import { Modal } from "../../modal/GenericModal";

import { nextHQCard, prevHQCard } from "../../../js/hqsArrowsFunction";
import hqsData from "/src/json/favorite-hq.json";

const HQCard = () => {
  const [hqsCards, setHqsCards] = useState([]);
  const [openHQModal, setopenHQModal] = useState(false);
  const [actualHQ, setActualHQ] = useState({})

  useEffect(() => {
    setHqsCards(hqsData);
  }, []);

  function hqStates(hq){
    setopenHQModal(true);
    setActualHQ(hq)
  }

  return (
    <div className="hq-slider">
      <Button className="prev" onClick={nextHQCard}>
        <i className="fa-solid fa-arrow-left-long" onClick={nextHQCard}></i>
      </Button>
      <ul className="card hq-slide">
        {hqsCards.length > 0 ? (
          hqsCards.map((hq, index) => (
            <li className="hq-card hq-item" key={index}>
              <div className="poster">
                <img src={hq.url} alt={hq.name} />
                <h3>{hq.original_name}</h3>
              </div>
              <div className="newMoreInfo">
                <p>Para mais Informações</p>
                <button onClick={() => hqStates(hq)}>Click!</button>
              </div>
            </li>
          ))
        ) : (
          <p className="loading">Carregando...</p>
        )}
      </ul>
      <Modal
        isOpen={openHQModal}
        setModalClosed={() => setopenHQModal(!openHQModal)}
      >
        <div className="hq-modal">
          <h3>
            {actualHQ.name} <br /> <span>{actualHQ.release_date}</span>
          </h3>
          <img src={actualHQ.backdrop_url} alt={actualHQ.name} />
          <div className="description">
            <h4 className="author">
              Autor: <span>{actualHQ.author}</span>
            </h4>
            <h4 className="gener">
              Gênero: <span>{actualHQ.genre}</span>
            </h4>
            <div className="sinopse">
              <p>{actualHQ.sinopse}</p>
            </div>
          </div>
        </div>
      </Modal>
      <Button className="next" onClick={prevHQCard}>
        <i className="fa-solid fa-arrow-right-long" onClick={prevHQCard}></i>
      </Button>
    </div>
  );
};

export default HQCard;
