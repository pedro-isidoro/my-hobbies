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
  .animation-card .newMoreInfo p {
    color: white;
  }

  & .movie-card .newMoreInfo button,
  .serie-card .newMoreInfo button,
  .animation-card .newMoreInfo button {
    color: ${(props) => props.color};
    background-color: ${(props) => props.button};
    border: 0.1rem solid ${(props) => props.color};
  }

  & .movie-card .newMoreInfo button:hover,
  .serie-card .newMoreInfo button:hover,
  .animation-card .newMoreInfo button:hover {
    cursor: pointer;
    background-color: #ababab;
    color: #fff;
    border-color: #fff;
  }

  & .movie-card h3,
  .serie-card h3,
  .animation-card h3 {
    color: ${(props) => props.color};
  }

  & .movie-card .movie-modal h3,
  .serie-card .serie-modal h3,
  .animation-card .animation-modal h3,
  .movie-card .movie-modal h3 span,
  .serie-card .serie-modal h3 span,
  .animation-card .animation-modal h3 span {
    font-size: 2rem;
    color: ${(props) => props.paragraph_color};
  }

  & .movie-card .movie-modal h3 span,
  .serie-card .serie-modal h3 span,
  .animation-card .animation-modal h3 span,
  .movie-card .movie-modal .description h4 span,
  .serie-card .serie-modal .description h4 span,
  .animation-card .animation-modal .description h4 span {
    color: ${(props) => props.span};
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

  @media (max-width: 412px) {
    & .viewedMovies,
    .viewedSeries,
    .viewedAnimations {
      height: 45rem;
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

  @media (max-width: 400px) {
    & .movie-card,
    .serie-card,
    .animation-card {
      padding-left: 0rem;
    }

    & .movie-card .movie-modal h3 span,
    .serie-card .serie-modal h3 span,
    .animation-card .animation-modal h3 span {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 371px) {
    & .viewedMovies,
    .viewedSeries,
    .viewedAnimations {
      height: 42rem;
    }

    & .movie-card img,
    .serie-card img,
    .animation-card img {
      width: 17.5rem;
    }
  }

  /* Meu cell fica entre 361px e 344px */
  @media (max-width: 361px) {
    & .viewedMovies,
    .viewedSeries,
    .viewedAnimations {
      height: 42rem;
    }

    & .movie-card,
    .serie-card,
    .animation-card {
      left: 2rem;
    }

    & .movie-card img,
    .serie-card img,
    .animation-card img {
      width: 16rem;
    }
  }

  @media (max-width: 351px) {
    & .movie-card,
    .serie-card,
    .animation-card {
      left: 1rem;
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