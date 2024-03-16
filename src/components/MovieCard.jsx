import React from "react";
import "./MovieCard.css";
import { useFavMovie } from "../App";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function MovieCard({ movie, onSetDetails }) {
  const { favMovies, addFav, removeFav } = useFavMovie();

  const isMovieInFav = favMovies.some((favmovie) => favmovie.id === movie.id);

  const handleCardAction = () => {
    if (isMovieInFav) {
      removeFav(movie.id);
    } else {
      addFav(movie);
    }
  };

  return (
    <>
      <div className="card">
        <NavLink to="/details" className="Link">
          <div className="poster" onClick={() => onSetDetails(movie)}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${
                movie.poster_path || movie.backdrop_path
              }`}
              alt=""
            />
          </div>
        </NavLink>

        <div className="info">
          <p
            className="title"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            📽
            {movie.title || movie.name || movie.vote_average}
          </p>
          <p className="date">📅{movie.release_date || movie.first_air_date}</p>
          <p className="vote">🌟{movie.vote_average}</p>
        </div>
        <div>
          <button onClick={handleCardAction} className="favorite">
            {isMovieInFav ? "Remove from Watch List" : "Add to Watch List"}
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
