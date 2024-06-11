import styled from "styled-components";

export const CinephiliaSection = styled.section`
  width: 100%;
  height: auto;
  padding: 4rem 0;
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  & .viewedMovies,
  .viewedSeries,
  .viewedAnimations {
    height: 45rem;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    /* background-color: #3dadd366; */
  }

  & Button {
    width: 12rem;
  }

  & .viewedMovies h2,
  .viewedSeries h2,
  .viewedAnimations h2 {
    font-size: 2.4rem;
  }

  & .viewedMovies h2,
  .viewedSeries h2,
  .viewedAnimations h2,
  .viewedMovies .movie-slider p,
  .viewedSeries .serie-slider p,
  .viewedAnimations .animation-slider p {
    color: ${(props) => props.color};
  }

  /* A partir daqui será os movie and series cards */
  & .movie-card .newMoreInfo,
  .serie-card .newMoreInfo,
  .animation-card .newMoreInfo {
    background-color: ${(props) => props.color};
  }

  & .movie-card .newMoreInfo p,
  .serie-card .newMoreInfo p,
  .animation-card .newMoreInfo p,
  .movie-card .newMoreInfo Button,
  .serie-card .newMoreInfo Button,
  .animation-card .newMoreInfo Button {
    color: white;
  }

  & .movie-card .newMoreInfo Button,
  .serie-card .newMoreInfo Button,
  .animation-card .newMoreInfo Button {
    color: ${(props) => props.color};
    background-color: ${(props) => props.button};
    border: 0.1rem solid ${(props) => props.color};
  }

  & .movie-card h3,
  .serie-card h3,
  .animation-card h3 {
    color: ${(props) => props.color};
  }

  & .movie-card .movie-modal h3,
  .serie-card .serie-modal h3,
  .animation-card .animation-modal h3 {
    font-size: 2rem;
    color: ${(props) => props.paragraph_color};
  }

  & .movie-card .movie-modal .description h4,
  .serie-card .serie-modal .description h4,
  .animation-card .animation-modal .description h4,
  .movie-card .movie-modal .description h4 i,
  .serie-card .serie-modal .description h4 i,
  .animation-card .animation-modal .description h4 i {
    color: ${(props) => props.paragraph_color};
  }

  & .movie-card .movie-modal .description h4 i,
  .serie-card .serie-modal .description h4 i,
  .animation-card .animation-modal .description h4 i {
    color: yellow;
  }

  & .movie-card .movie-modal .description .sinopse::-webkit-scrollbar,
  .serie-card .serie-modal .description .sinopse::-webkit-scrollbar,
  .animation-card .animation-modal .description .sinopse::-webkit-scrollbar {
    background-color: #00000039;
  }

  & .movie-card .movie-modal .description .sinopse::-webkit-scrollbar-thumb,
  .serie-card .serie-modal .description .sinopse::-webkit-scrollbar-thumb,
  .animation-card
    .animation-modal
    .description
    .sinopse::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.paragraph_color};
  }

  & .movie-card .movie-modal .description .sinopse p,
  .serie-card .serie-modal .description .sinopse p,
  .animation-card .animation-modal .description .sinopse p {
    color: ${(props) => props.paragraph_color};
  }

  @media (max-width: 417px) {
    & .viewedMovies,
    .viewedSeries,
    .viewedAnimations {
      height: 39rem;
      width: 95%;
      gap: 0;
    }

    & .movie-card,
    .serie-card,
    .animation-card {
      justify-content: center;
    }

    & .movie-card img,
    .serie-card img,
    .animation-card img {
      width: 15rem;
      margin-bottom: 0.8rem;
    }

    & .movie-card h3,
    .serie-card h3,
    .animation-card h3 {
      font-size: 1.7rem;
    }

    & .movie-card .movie-modal .description .sinopse,
    .serie-card .serie-modal .description .sinopse,
    .animation-card .animation-modal .description .sinopse {
      height: 12rem;
      width: 90%;
      overflow-y: auto;
    }
  }

  @media (max-width: 412px) {
    & .viewedMovies,
    .viewedSeries,
    .viewedAnimations {
      height: 42rem;
    }

    & .movie-card,
    .serie-card,
    .animation-card {
      padding-left: 2rem;
    }

    & .movie-card img,
    .serie-card img,
    .animation-card img {
      width: 19rem;
    }
  }

  @media (max-width: 371px) {
    & .viewedMovies,
    .viewedSeries,
    .viewedAnimations {
      height: 39rem;
    }

    & .movie-card img,
    .serie-card img,
    .animation-card img {
      width: 17.5rem;
    }
  }

  /* Meu cell fica entre 361px e 344px */
  @media (max-width: 361px) {
    & .movie-card img,
    .serie-card img,
    .animation-card img {
      width: 16rem;
    }
  }

  @media (max-width: 332px) {
    & .viewedMovies,
    .viewedSeries,
    .viewedAnimations {
      height: 35rem;
    }

    & .movie-card img,
    .serie-card img,
    .animation-card img {
      width: 13rem;
    }
  }
`;