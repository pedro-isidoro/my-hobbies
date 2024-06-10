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

  & .viewedMovies .movie-slider,
  .viewedSeries .serie-slider,
  .viewedAnimations .animation-slider {
    display: flex;
    align-items: center;
    gap: 3rem;
    width: 100%;
    height: 100%;
  }

  & .viewedMovies .movie-slider Button,
  .viewedSeries .serie-slider Button,
  .viewedAnimations .animation-slider Button {
    width: 6rem;
    height: 3rem;
    padding-top: 0.2rem;
  }

  & .viewedMovies .movie-slider Button i,
  .viewedSeries .serie-slider Button i,
  .viewedAnimations .animation-slider Button i {
    font-size: 1.8rem;
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
  & .viewedMovies .movie-slider .card,
  .viewedSeries .serie-slider .card,
  .viewedAnimations .animation-slider .card {
    width: 100%;
    height: 87%;
    padding: 0 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    gap: 2rem;
  }

  & .viewedAnimations .animation-slider .card {
    height: 93%;
  }

  & .movie-card,
  .serie-card,
  .animation-card {
    width: 22rem;
    height: 100%;
    padding: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    /* background-color: lightcoral; */
  }

  & .movie-card .newMoreInfo,
  .serie-card .newMoreInfo,
  .animation-card .newMoreInfo {
    position: absolute;
    width: 90%;
    height: 14rem;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: ${(props) => props.color};
    transform: translateY(101%);
    transition: transform 0.3s ease-in;
  }

  & .animation-card .newMoreInfo {
    height: 16rem;
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
    width: 60%;
    height: 3rem;
    border-radius: 25rem;
    font-size: 1.6rem;
    color: ${(props) => props.color};
    background-color: ${(props) => props.button};
    border: 0.1rem solid ${(props) => props.color};
  }

  & .movie-card .newMoreInfo Button:hover,
  .serie-card .newMoreInfo Button:hover,
  .animation-card .newMoreInfo Button:hover {
    cursor: pointer;
    background-color: #ababab;
    color: #fff;
    border-color: #fff;
  }

  & .movie-card:hover .newMoreInfo,
  .serie-card:hover .newMoreInfo,
  .animation-card:hover .newMoreInfo {
    transform: translateY(0);
  }

  & .movie-card img,
  .serie-card img,
  .animation-card img {
    width: 18.5rem;
    margin-bottom: 0.8rem;
  }

  & .movie-card h3,
  .serie-card h3,
  .animation-card h3 {
    font-size: 1.9rem;
    color: ${(props) => props.color};
  }

  & .movie-card p,
  .serie-card p,
  .animation-card p {
    font-size: 1.7rem;
    gap: 0.3rem;
    display: flex;
    align-items: center;
  }

  & .movie-card .movie-modal,
  .serie-card .serie-modal,
  .animation-card .animation-modal {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  & .movie-card .movie-modal .description,
  .serie-card .serie-modal .description,
  .animation-card .animation-modal .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
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
    font-size: 1.6rem;
    height: 2rem;
    text-align: center;
  }

  & .movie-card .movie-modal .description h4 i,
  .serie-card .serie-modal .description h4 i,
  .animation-card .animation-modal .description h4 i {
    margin: 0 0.5rem;
    color: yellow;
  }

  & .movie-card .movie-modal .description .sinopse,
  .serie-card .serie-modal .description .sinopse,
  .animation-card .animation-modal .description .sinopse {
    height: 12rem;
    width: 80%;
    overflow-y: auto;
  }

  & .movie-card .movie-modal .description .sinopse::-webkit-scrollbar,
  .serie-card .serie-modal .description .sinopse::-webkit-scrollbar,
  .animation-card .animation-modal .description .sinopse::-webkit-scrollbar {
    width: 0.8rem;
    border-radius: 1rem;
    background-color: #00000039;
  }

  & .movie-card .movie-modal .description .sinopse::-webkit-scrollbar-thumb,
  .serie-card .serie-modal .description .sinopse::-webkit-scrollbar-thumb,
  .animation-card
    .animation-modal
    .description
    .sinopse::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: ${(props) => props.paragraph_color};
  }

  & .movie-card .movie-modal .description .sinopse p,
  .serie-card .serie-modal .description .sinopse p,
  .animation-card .animation-modal .description .sinopse p {
    width: 100%;
    color: ${(props) => props.paragraph_color};
    padding: 0 1rem;
    font-size: 1.9rem;
    text-align: justify;
  }

  @media (max-width: 417px) {
    & .viewedMovies,
    .viewedSeries,
    .viewedAnimations {
      height: 38rem;
    }

    & .movie-card img,
    .serie-card img,
    .animation-card img {
      width: 14.5rem;
      margin-bottom: 0.8rem;
    }

    & .movie-card .movie-modal .description .sinopse,
    .serie-card .serie-modal .description .sinopse,
    .animation-card .animation-modal .description .sinopse {
      height: 12rem;
      width: 90%;
      overflow-y: auto;
    }
  }
`;
