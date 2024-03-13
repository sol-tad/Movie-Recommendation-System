import React from 'react'
import "./MovieCard.css";

function MovieCard({movie}) {
  return (
    <div className="card">
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="info">
        <p className="title">{movie.title}</p>
        <p className="vote"></p>
      </div>
    </div>
  );
}

export default MovieCard
