import React from "react";
import "./Details.css";

function Details({ details }) {
  return (
    <div className="details">
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${
            details.poster_path || details.backdrop_path
          }`}
          alt=""
        />
      </div>
      <div>
        <div className="description">
          <h2>Details</h2>
          <p className="title">
            🎬 {details.title || details.name || details.vote_average}
          </p>
          <p className="date">
            📅{details.release_date || details.first_air_date}
          </p>
          <p className="vote">⭐{details.vote_average}</p>
        </div>
        <div className="overviews">
          <h2 className="titleOverview">Overview</h2>
          <h3 className="overviewInfo">{details.overview}</h3>
        </div>
      </div>
    </div>
  );
}

export default Details;
