import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme-context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../../generic-button/GenericButton";

export function MoviesAndSeries() {
  const { theme } = useContext(ThemeContext);

  return (
    <CinephiliaSection
      color={theme.color}
      background={theme.background_general_color}
      paragraph_color={theme.paragraph_color}
      button={theme.background_header_footer_color}
    >
      <div className="viewedMovies">
        <h3>Filmes</h3>
        <p>XXXXXXXXXXXXXXXX</p>
      </div>
      <div className="viewedSeries">
        <h3>Séries</h3>
        <p>XXXXXXXXXXXXXXXX</p>
      </div>
      <Link to="/">
        <Button>Home Page</Button>
      </Link>
    </CinephiliaSection>
  );
}

const CinephiliaSection = styled.section`
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
