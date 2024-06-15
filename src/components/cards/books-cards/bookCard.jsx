import React, { useEffect, useState } from "react";
import { Button } from "../../generic-button/GenericButton";
import { Modal } from "../../modal/GenericModal";
import booksData from "/src/json/favorite-books.json";

import { nextBookCard, prevBookCard } from "../../../js/booksArrowsFunction";

const BookCard = () => {
  const [booksCards, setBooksCards] = useState([]);
  const [openBookModal, setopenBookModal] = useState(false);
  const [actualBook, setActualBook] = useState({});

  useEffect(() => {
    setBooksCards(booksData);
  }, []);

  function bookStates(book) {
    setopenBookModal(true);
    setActualBook(book);
    // console.log(book)
  }

  return (
    <div className="book-slider">
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
                <button onClick={() => bookStates(book)}>Click!</button>
              </div>
            </li>
          ))
        ) : (
          <p className="loading">Carregando...</p>
        )}
      </ul>
      <Modal
        isOpen={openBookModal}
        setModalClosed={() => setopenBookModal(!openBookModal)}
        className="bookModal"
      >
        <div className="book-modal">
          <h3>
            {actualBook.name} <br />
            <span>{actualBook.release_date}</span>
          </h3>
          <img src={actualBook.url} alt={actualBook.name} />
          <div className="description">
            <h4 className="author">
              Autor: <span>{actualBook.author}</span>
            </h4>
            <h4 className="gener">
              Gênero: <span>{actualBook.genre}</span>
            </h4>
            <div className="sinopse">
              <p>{actualBook.sinopse}</p>
            </div>
          </div>
        </div>
      </Modal>
      <Button className="next" onClick={prevBookCard}>
        <i className="fa-solid fa-arrow-right-long" onClick={prevBookCard}></i>
      </Button>
    </div>
  );
};

export default BookCard;
