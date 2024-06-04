import styled from "styled-components";

export const CinephiliaSection = styled.section`
  width: 100%;
  height: 82svb;
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & .viewedMovies,
  .viewedSeries {
    height: 26rem;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #3dadd366;
  }

  & .viewedMovies h3,
  .viewedSeries h3,
  .viewedMovies p,
  .viewedSeries p {
    color: ${(props) => props.color};
  }

  & .viewedMovies h3,
  .viewedSeries h3 {
    font-size: 2rem;
  }

  & .viewedMovies p,
  .viewedSeries p {
    font-size: 1.6rem;
  }

  & Button {
    width: 12rem;
  }
`;
