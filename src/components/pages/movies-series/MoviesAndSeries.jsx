import React, { useContext, useEffect, useState } from "react";
import { useMoviesAndSeries } from "../../../hook/MovieAndSerieRequest";
import { ThemeContext } from "../../../contexts/Theme-context";
import { CinephiliaSection } from "./MoviesAndSeries.style";
import { Link } from "react-router-dom";
import { Button } from "../../generic-button/GenericButton";

import MovieCard from "../../movie-theater-card/movieCard";
import SerieCard from "../../movie-theater-card/serieCard";
import AnimationCard from "../../movie-theater-card/animationCard";
import { nextMovieCard, prevMovieCard } from "../../../js/moviesArrowsFunction";
import { nextAnimationCard, prevAnimationCard } from "../../../js/animationsArrowsFunction";
import { nextSerieCard, prevSerieCard } from "../../../js/seriesArrowsFunction";


export function MoviesAndSeries() {
  const { theme } = useContext(ThemeContext);

  let movies1 = useMoviesAndSeries(8302788, 1).dataList;
  let movies2 = useMoviesAndSeries(8302788, 2).dataList;
  let movies3 = useMoviesAndSeries(8302788, 3).dataList;
  const allMovies = movies1.concat(movies2, movies3);
  // console.log(movies1)
  
  let series1 = useMoviesAndSeries(8302789, 1).dataList;
  let series2 = useMoviesAndSeries(8302789, 2).dataList;
  let series3 = useMoviesAndSeries(8302789, 3).dataList;
  const allSeries = series1.concat(series2, series3);
  // console.log(series1)
  
  let animation1 = useMoviesAndSeries(8302786, 1).dataList;
  let animation2 = useMoviesAndSeries(8302786, 2).dataList;
  let animation3 = useMoviesAndSeries(8302786, 3).dataList;
  const allAnimations = animation1.concat(animation2, animation3);

  return (
    <CinephiliaSection
      color={theme.color}
      background={theme.background_general_color}
      paragraph_color={theme.paragraph_color}
      button={theme.background_header_footer_color}
    >
      <div className="viewedMovies">
        <h2>Filmes</h2>
        <div className="movie-slider">
          <Button className="prev" onClick={nextMovieCard}>
            <i
              className="fa-solid fa-arrow-left-long"
              onClick={nextMovieCard}
            ></i>
          </Button>
          <ul className="card movie-slide">
            {allMovies.length > 0 ? (
              allMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            ) : (
              <p>Carregando...</p>
            )}
          </ul>
          <Button className="next" onClick={prevMovieCard}>
            <i
              className="fa-solid fa-arrow-right-long"
              onClick={prevMovieCard}
            ></i>
          </Button>
        </div>
      </div>
      <div className="viewedAnimations">
        <h2>Animações</h2>
        <div className="animation-slider">
          <Button className="prev" onClick={nextAnimationCard}>
            <i
              className="fa-solid fa-arrow-left-long"
              onClick={nextAnimationCard}
            ></i>
          </Button>
          <ul className="card animation-slide">
            {allAnimations.length > 0 ? (
              allAnimations.map((Animation) => (
                <AnimationCard key={Animation.id} animation={Animation} />
              ))
            ) : (
              <p>Carregando...</p>
            )}
          </ul>
          <Button className="next" onClick={prevAnimationCard}>
            <i
              className="fa-solid fa-arrow-right-long"
              onClick={prevAnimationCard}
            ></i>
          </Button>
        </div>
      </div>
      <div className="viewedSeries">
        <h2>Séries</h2>
        <div className="serie-slider">
          <Button className="prev" onClick={nextSerieCard}>
            <i
              className="fa-solid fa-arrow-left-long"
              onClick={nextSerieCard}
            ></i>
          </Button>
          <ul className="card serie-slide">
            {allSeries.length > 0 ? (
              allSeries.map((serie) => (
                <SerieCard key={serie.id} serie={serie} />
              ))
            ) : (
              <p>Carregando...</p>
            )}
          </ul>
          <Button className="next" onClick={prevSerieCard}>
            <i
              className="fa-solid fa-arrow-right-long"
              onClick={prevSerieCard}
            ></i>
          </Button>
        </div>
      </div>
      <Link to="/">
        <Button>Home Page</Button>
      </Link>
    </CinephiliaSection>
  );
}
