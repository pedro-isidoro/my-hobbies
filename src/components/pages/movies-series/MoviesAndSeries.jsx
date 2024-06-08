import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../contexts/Theme-context";
import { CinephiliaSection } from "./MoviesAndSeries.style";
import { Link } from "react-router-dom";
import { Button } from "../../generic-button/GenericButton";

import { useMoviesAndSeries } from "../../../hook/MovieAndSerieRequest";
import MovieCard from "../../movie-theater-card/movieCard";
import SerieCard from "../../movie-theater-card/serieCard";


export function MoviesAndSeries() {
  const { theme } = useContext(ThemeContext);

  let movies1 = useMoviesAndSeries(8302788, 1).dataList;
  let series1 = useMoviesAndSeries(8302789, 1).dataList;
  // console.log('Filmes: ', movies1);
  // console.log("Séries: ", series1);

  return (
    <CinephiliaSection
      color={theme.color}
      background={theme.background_general_color}
      paragraph_color={theme.paragraph_color}
      button={theme.background_header_footer_color}
    >
      <div className="viewedMovies">
        <h2>Filmes</h2>
        <div className="card">
          {movies1.length > 0 ? (
            movies1.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
      <div className="viewedSeries">
        <h2>Séries</h2>
        <div className="card">
          {series1.length > 0 ? (
            series1.map((serie) => <SerieCard key={serie.id} movie={serie} />)
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
