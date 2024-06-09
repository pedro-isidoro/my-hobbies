import styled from "styled-components";

export const CinephiliaSection = styled.section`
  width: 100%;
  height: 210svb;
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

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
    height: 3rem;
    width: 60%;
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

  & .movie-card p i,
  .serie-card p i,
  .animation-card p i {
    font-size: 1.5rem;
  }
`;
