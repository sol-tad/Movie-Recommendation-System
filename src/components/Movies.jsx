import React from "react";
import { useState, useEffect } from "react";
import "./home.css";

import Header from "./Header";
import MovieCard from "./MovieCard";
function Movies() {
  const API_URL_popular =
    "https://api.themoviedb.org/3/movie/popular?api_key=5fe36522e1bd3066b9333dbc4be8d12e&language=en-US";
  const [movies, setMovies] = useState([]);

  const [page, setPage] = useState();
  useEffect(() => {
    fetch(API_URL_popular)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  console.log(movies[1]?.adult);
  return (
    <div>
      <div className="app">
        <div className="movies">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
