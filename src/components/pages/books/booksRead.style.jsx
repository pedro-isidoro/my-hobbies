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
  .hq-slider .newMoreInfo p,
  .book-slider .newMoreInfo Button,
  .hq-slider .newMoreInfo Button {
    color: white;
  }

  & .book-slider .newMoreInfo Button,
  .hq-slider .newMoreInfo Button {
    cursor: pointer;
    color: ${(props) => props.color};
    background-color: ${(props) => props.button};
    border: 0.1rem solid ${(props) => props.color};
  }

  & .book-card h3,
  .hq-card h3 {
    color: ${(props) => props.color};
  }

  & .book-card .book-modal h3,
  .hq-card .hq-modal h3 {
    font-size: 2rem;
    color: ${(props) => props.paragraph_color};
  }

  & .book-card .book-modal .description h4,
  .hq-card .hq-modal .description h4 {
    color: ${(props) => props.paragraph_color};
  }

  & .book-card .book-modal .description span,
  .hq-card .hq-modal .description span {
    font-size: 1.6rem;
    color: ${(props) => props.icon_hover_color};
  }
    
    & .book-card .book-modal .description .sinopse::-webkit-scrollbar-thumb,
    .hq-card .hq-modal .description .sinopse::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.paragraph_color};
  }

  & .book-card .book-modal .description .sinopse p,
  .hq-card .hq-modal .description .sinopse p {
    color: ${(props) => props.paragraph_color};
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
    .hq-card img {
      width: 19rem;
    }

    & .BooksRead img,
    .BooksToRead img {
      width: 17.5rem;
    }

    & .book-card img,
    .hq-card img {
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
    .hq-card img {
      height: 24rem;
    }

    & .book-card .book-modal h3,
    .hq-card .hq-modal h3 {
      font-size: 1.8rem;
    }

    & .book-card .book-modal .description h4,
    .hq-card .hq-modal .description h4,
    & .book-card .book-modal .description span,
    .hq-card .hq-modal .description span {
      font-size: 1.4rem;
    }

    & .book-card .book-modal .description h4.gener,
    .hq-card .hq-modal .description h4.gener {
      margin-bottom: 3rem;
    }

    & .book-card .book-modal .description p,
    .hq-card .hq-modal .description p {
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
    .hq-card img {
      height: 20rem;
    }

    & .book-card,
    .hq-card {
      left: 2rem;
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
    .hq-card img {
      height: 16rem;
    }
  }
`;
