import React from "react";
import "./MovieCard.css";
import { useFavMovie } from "../App";

function FavMovieCard({ movie }) {
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
    <div className="card">
    <div>
        <button onClick={handleCardAction} className="favorite">
        {isMovieInFav ? 'Remove from Watch List' : 'Add to Watch List'}

        </button>
      </div>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
      </div>

      <div className="info">
        <p className="title text-red-500">{movie.title}</p>
        <p className="date">{movie.release_date}</p>
        <p className="vote">{movie.vote_average}</p>
      </div>

      <div className="overview">
        <h2 className="titleOverview">Overview:</h2>
        <h3 className="overviewInfo">{movie.overview}</h3>
      </div>
    </div>
  );
}

export default FavMovieCard;
