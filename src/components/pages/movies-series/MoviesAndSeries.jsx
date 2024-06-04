import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme-context";
import { CinephiliaSection } from "./MoviesAndSeries.style";
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
