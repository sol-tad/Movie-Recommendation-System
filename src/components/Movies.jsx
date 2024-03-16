import React from "react";
import { useState, useEffect } from "react";
import "./movies.css";

import Header from "./Header";
import MovieCard from "./MovieCard";
function Movies({ onSetDetails }) {
  const API_URL_popular =
    "https://api.themoviedb.org/3/movie/popular?api_key=5fe36522e1bd3066b9333dbc4be8d12e&language=en-US";
  const API_URL_Action =
    "https://api.themoviedb.org/3/discover/tv?api_key=5fe36522e1bd3066b9333dbc4be8d12e&language=en-US";
  const API_URL_Romance =
    "https://api.themoviedb.org/3/discover/tv?api_key=5fe36522e1bd3066b9333dbc4be8d12e&language=en-US&with_genres=10749";
  const API_URL_Horror =
    "https://api.themoviedb.org/3/discover/tv?api_key=5fe36522e1bd3066b9333dbc4be8d12e&language=en-US&with_genres=99";
  const API_URL_Comedy =
    "https://api.themoviedb.org/3/discover/tv?api_key=5fe36522e1bd3066b9333dbc4be8d12e&language=en-US&with_genres=35";
  const API_URL_Trending =
    "https://api.themoviedb.org/3/trending/all/week?api_key=5fe36522e1bd3066b9333dbc4be8d12e&language=en-US";

  const [movies, setMovies] = useState([]);
  const [action, setAction] = useState([]);
  const [romance, setRomance] = useState([]);
  const [horror, setHorror] = useState([]);
  const [comedy, setComedy] = useState([]);

  const [page, setPage] = useState();
  useEffect(() => {
    //popular
    fetch(API_URL_popular)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
    //action
    fetch(API_URL_Action)
      .then((res) => res.json())
      .then((data) => setAction(data.results));
    //romance
    fetch(API_URL_Romance)
      .then((res) => res.json())
      .then((data) => setRomance(data.results));
    //horror
    fetch(API_URL_Horror)
      .then((res) => res.json())
      .then((data) => setHorror(data.results));
    //comedy
    fetch(API_URL_Trending)
      .then((res) => res.json())
      .then((data) => setComedy(data.results));
  }, []);
  console.log(action);
  console.log(movies);
  console.log(romance)
  console.log(horror)
  console.log(comedy)
  // console.log(movies[1]?.adult);

  return (
    <div>
      <div className="app">
        <h2>romantic Movies</h2>
        <div className="movies">
          {romance.map((romance) => (
            <MovieCard onSetDetails={onSetDetails} movie={romance} />
          ))}
        </div>
        <h2>action Movies</h2>
        <div className="movies">
          {action.map((action) => (
            <MovieCard onSetDetails={onSetDetails} movie={action} />
          ))}
        </div>
        <h2>popular Movies</h2>
        <div className="movies">
          {movies.map((movie) => (
            <MovieCard onSetDetails={onSetDetails} movie={movie} />
          ))}
        </div>

        <h2>comedy Movies</h2>
        <div className="movies">
          {comedy.map((comedy) => (
            <MovieCard onSetDetails={onSetDetails} movie={comedy} />
          ))}
        </div>
        <h2>tv series Movies</h2>
        <div className="movies">
          {horror.map((horror) => (
            <MovieCard onSetDetails={onSetDetails} movie={horror} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
