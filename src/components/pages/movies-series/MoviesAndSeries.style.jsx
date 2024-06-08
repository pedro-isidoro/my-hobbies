import styled from "styled-components";

export const CinephiliaSection = styled.section`
  width: 100%;
  height: 140svb;
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & .viewedMovies,
  .viewedSeries {
    height: 41.5rem;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    /* background-color: #3dadd366; */
  }

  & .viewedMovies h2,
  .viewedSeries h2,
  .viewedMovies p,
  .viewedSeries p {
    color: ${(props) => props.color};
  }

  & .viewedMovies h2,
  .viewedSeries h2 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  & Button {
    width: 12rem;
  }

  /* A partir daqui será os movie and series cards */
  & .viewedMovies .card,
  .viewedSeries .card {
    width: 110rem;
    height: 100%;
    padding: 1rem 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    background-color: red;
    gap: 2rem;
  }

  & .movie-card,
  .serie-card {
    width: 18rem;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    background-color: lightblue;
    }
    
  & .movie-card img,
  .serie-card img {
    width: 18rem;
    margin-bottom: .8rem;
  }
  
  & .movie-card h3,
  .serie-card h3 {
    font-size: 1.9rem;
    color: white;
  }
  
  & .movie-card p,
  .serie-card p {
    font-size: 1.7rem;
    /* background-color: lightblue; */
    gap: 0.3rem;
    display: flex;
    align-items: center;
  }

  & .movie-card p i,
  .serie-card p i {
    font-size: 1.5rem;
  }
`;
