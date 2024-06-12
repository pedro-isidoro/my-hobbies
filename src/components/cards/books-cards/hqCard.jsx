import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../contexts/Theme-context";
import { Button } from "../../generic-button/GenericButton";
import { Modal } from "../../generic-modal/GenericModal";

import { nextHQCard, prevHQCard } from "../../../js/hqsArrowsFunction";
import hqsData from "/src/json/favorite-hq.json";

const HQCard = () => {
  const { theme } = useContext(ThemeContext);
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
    <div
      className="hq-slider"
      color={theme.color}
      background={theme.background_general_color}
      paragraph_color={theme.paragraph_color}
      button={theme.background_header_footer_color}
    >
      <Button className="prev" onClick={nextHQCard}>
        <i className="fa-solid fa-arrow-left-long" onClick={nextHQCard}></i>
      </Button>
      <ul className="card hq-slide">
        {hqsCards.length > 0 ? (
          hqsCards.map((hq, index) => (
            <li className="hq-card hq-item" key={index}>
              <div className="poster">
                <img src={hq.url} alt={hq.name} />
                <h3>{hq.name}</h3>
              </div>
              <div className="newMoreInfo">
                <p>Para mais Informações</p>
                <button onClick={() => hqStates(hq)}>Click!</button>
              </div>
              <Modal
                isOpen={openHQModal}
                setModalClosed={() => setopenHQModal(!openHQModal)}
              >
                <div className="hq-modal">
                  <h3>
                    {actualHQ.name} <br /> {actualHQ.release_date}
                  </h3>
                  <img src={actualHQ.url} alt={actualHQ.name} />
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
            </li>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </ul>
      <Button className="next" onClick={prevHQCard}>
        <i className="fa-solid fa-arrow-right-long" onClick={prevHQCard}></i>
      </Button>
    </div>
  );
};

export default HQCard;
