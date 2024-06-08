import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../contexts/Theme-context";
import { CinephiliaSection } from "./MoviesAndSeries.style";
import { Link } from "react-router-dom";
import { Button } from "../../generic-button/GenericButton";

import MoviesAndSeriesCard from "../../movie-theater-card/moviesAndSeriesCard";
import { useMoviesAndSeries } from "../../../hook/MovieAndSerieRequest";


export function MoviesAndSeries() {
  const { theme } = useContext(ThemeContext);

  let movies1 = useMoviesAndSeries(8302788, 1).dataList;
  let series1 = useMoviesAndSeries(8302789, 1).dataList;
  // console.log(movies1);
  // console.log(series1);

  return (
    <CinephiliaSection
      color={theme.color}
      background={theme.background_general_color}
      paragraph_color={theme.paragraph_color}
      button={theme.background_header_footer_color}
    >
      <div className="viewedMovies">
        <h3>Filmes</h3>
        <div>
          {movies1.length > 0 ? (
            movies1.map((movie) => (
              <MoviesAndSeriesCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
      <div className="viewedSeries">
        <h3>Séries</h3>
        <div>
          {series1.length > 0 ? (
            series1.map((serie) => (
              <MoviesAndSeriesCard key={serie.id} movie={serie} />
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
      <Link to="/">
        <Button>Home Page</Button>
      </Link>
    </CinephiliaSection>
  );
}
