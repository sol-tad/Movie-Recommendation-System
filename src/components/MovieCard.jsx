import React from 'react'
import "./MovieCard.css";

function MovieCard({movie}) {
  return (
    <>
      <div className="card">
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
        </div>
        <div className="info">
          <p className="title">{movie.title}</p>
          <p className="date">{movie.release_date}</p>
          <p className="vote">{movie.vote_average}</p>
        </div>
        <div>
          <button className='favorite'>Add to Watch List</button>
        </div>
        <div className="overview">
          <h2 className="titleOverview">Overview:</h2>
          <h3 className="overviewInfo">{movie.overview}</h3>
        </div>
      </div>
    </>
  );
}

export default MovieCard
