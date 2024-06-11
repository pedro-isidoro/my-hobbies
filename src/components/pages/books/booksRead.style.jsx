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
  .hq-card .hq-modal .description h4,
  .book-card .book-modal .description h4 i,
  .hq-card .hq-modal .description h4 i {
    color: ${(props) => props.paragraph_color};
  }

  & .book-card .book-modal .description h4 i,
  .hq-card .hq-modal .description h4 i {
    color: yellow;
  }

  & .book-card .book-modal .description .sinopse::-webkit-scrollbar,
  .hq-card .hq-modal .description .sinopse::-webkit-scrollbar {
    background-color: #00000039;
  }

  & .book-card .book-modal .description .sinopse::-webkit-scrollbar-thumb,
  .hq-card .hq-modal .description .sinopse::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.paragraph_color};
  }

  & .book-card .book-modal .description .sinopse p,
  .hq-card .hq-modal .description .sinopse p {
    color: ${(props) => props.paragraph_color};
  }
`;
