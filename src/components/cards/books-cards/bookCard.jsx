import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../contexts/Theme-context";
import { Button } from "../../generic-button/GenericButton";
import { Modal } from "../../generic-modal/GenericModal";
import booksData from "/src/json/favorite-books.json";

import { nextBookCard, prevBookCard } from "../../../js/booksArrowsFunction";

const BookCard = () => {
  const { theme } = useContext(ThemeContext);
  const [openBookModal, setopenBookModal] = useState(false);
  const [booksCards, setBooksCards] = useState([]);

  useEffect(() => {
    setBooksCards(booksData);
  }, []);
  // console.log(booksData);

  return (
    <div
      className="book-slider"
      color={theme.color}
      background={theme.background_general_color}
      paragraph_color={theme.paragraph_color}
      button={theme.background_header_footer_color}
    >
      <Button className="prev" onClick={nextBookCard}>
        <i className="fa-solid fa-arrow-left-long" onClick={nextBookCard}></i>
      </Button>
      <ul className="card book-slide">
        {booksCards.length > 0 ? (
          booksCards.map((book, index) => (
            <li className="book-card book-item" key={index}>
              <div className="poster">
                <img src={book.url} alt={book.name} />
                <h3>{book.name}</h3>
              </div>
              <div className="newMoreInfo">
                <p>Para mais Informações</p>
                <button onClick={() => setopenBookModal(true)}>Click!</button>
              </div>
              <Modal
                isOpen={openBookModal}
                setModalClosed={() => setopenBookModal(!openBookModal)}
              >
                <div className="book-modal">
                  <h3>
                    {book.name} <br /> {book.release_date}
                  </h3>
                  <img src={book.url} alt={book.name} />
                  <div className="description">
                    <h4>
                      Autor: {book.author} <br />
                      Gênero: {book.genre}
                    </h4>
                    <div className="sinopse">
                      <p>{book.sinopse}</p>
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
      <Button className="next" onClick={prevBookCard}>
        <i className="fa-solid fa-arrow-right-long" onClick={prevBookCard}></i>
      </Button>
    </div>
  );
};

export default BookCard;
