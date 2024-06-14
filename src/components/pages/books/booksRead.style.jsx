import styled from "styled-components";

export const BooksSection = styled.section`
  width: 100%;
  height: auto;
  padding: 4rem 0;
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  & .BooksRead,
  .BooksToRead {
    height: 45rem;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  & .BooksRead h2,
  .BooksToRead h2 {
    color: ${(props) => props.color};
    font-size: 2.4rem;
  }

  & Button {
    width: 12rem;
  }

  /* A partir daqui será os movie and series cards */
  & .book-slider p,
  .hq-slider p {
    color: ${(props) => props.color};
  }

  & .book-slider .newMoreInfo,
  .hq-slider .newMoreInfo {
    background-color: ${(props) => props.color};
  }

  & .book-slider .newMoreInfo p,
  .hq-slider .newMoreInfo p {
    color: white;
  }

  & .book-slider .newMoreInfo button,
  .hq-slider .newMoreInfo button {
    color: ${(props) => props.color};
    background-color: ${(props) => props.button};
    border: 0.1rem solid ${(props) => props.color};
  }

  & .book-slider .newMoreInfo button:hover,
  .hq-slider .newMoreInfo button:hover {
    cursor: pointer;
    background-color: #ababab;
    color: #fff;
    border-color: #fff;
  }

  & .book-card h3,
  .hq-card h3 {
    color: ${(props) => props.color};
  }

  @media (max-width: 416px) {
    & .BooksRead,
    .BooksToRead {
      height: 44rem;
    }

    & .book-card,
    .hq-card {
      padding-left: 0rem;
    }

    & .book-card img,
    .hq-card img,
    .modal-info .book-modal img,
    .modal-info .hq-modal img {
      width: 19rem;
    }

    & .BooksRead img,
    .BooksToRead img {
      width: 17.5rem;
    }

    & .book-card img,
    .hq-card img,
    .modal-info .book-modal img,
    .modal-info .hq-modal img {
      height: 24rem;
    }
  }

  @media (max-width: 400px) {
    & .BooksRead,
    .BooksToRead {
      height: 43rem;
    }

    & .BooksRead img,
    .BooksToRead img {
      width: 16rem;
    }

    & .book-card img,
    .hq-card img,
    .modal-info .book-modal img,
    .modal-info .hq-modal img {
      height: 24rem;
    }

    & .modal-info .book-modal h3,
    .modal-info .hq-modal h3,
    .modal-info .book-modal h3 span,
    .modal-info .hq-modal h3 span {
      font-size: 1.8rem;
    }

    & .modal-info .book-modal .description h4,
    .modal-info .hq-modal .description h4,
    .modal-info .book-modal .description span,
    .modal-info .hq-modal .description span {
      font-size: 1.4rem;
    }

    & .modal-info .book-modal .description h4.gener,
    .modal-info .hq-modal .description h4.gener {
      margin-bottom: 3rem;
    }

    & .modal-info .book-modal .description p,
    .modal-info .hq-modal .description p {
      font-size: 1.4rem;
      height: 18rem;
    }
  }

  @media (max-width: 385px) {
    & .BooksRead img,
    .BooksToRead img {
      width: 14rem;
    }
  }

  @media (max-width: 371px) {
    & .BooksRead,
    .BooksToRead {
      height: 42rem;
    }

    & .BooksRead img,
    .BooksToRead img {
      width: 18rem;
    }
  }

  /* Meu cell fica entre 361px e 344px */
  @media (max-width: 361px) {
    & .BooksRead img,
    .BooksToRead img {
      width: 15rem;
    }

    & .book-card img,
    .hq-card img,
    .modal-info .book-modal img,
    .modal-info .hq-modal img {
      height: 24rem;
    }

    & .book-card,
    .hq-card {
      left: 1rem;
    }
  }

  @media (max-width: 332px) {
    & .BooksRead,
    .BooksToRead {
      height: 38rem;
    }

    & .BooksRead img,
    .BooksToRead img {
      width: 10rem;
    }

    & .book-card img,
    .hq-card img,
    .modal-info .book-modal img,
    .modal-info .hq-modal img {
      height: 16rem;
    }
  }
`;
