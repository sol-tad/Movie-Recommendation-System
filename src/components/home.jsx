import React from "react";
import { useState, useEffect } from "react";
import "./home.css";

import Header from "./Header";
import MovieCard from "./MovieCard";
function Home({ onSetDetails }) {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=5fe36522e1bd3066b9333dbc4be8d12e&language=en-US";
  const [movies, setMovies] = useState([]);

  const [page, setPage] = useState();
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  // console.log(movies[1]?.adult);
  return (
    <div>
      <div className="app">
        <img
          src="https://wallpapershome.com/images/pages/pic_h/16109.jpg"
          alt=""
          style={{
            height: "100vh",
            width: "100vw",
          }}
        />
        <h1
          className="welcome"
          style={{
            position: "absolute",
            top: "30vh",
            left: "100px",
            zIndex: "1",
            width: "85%",
            lineHeight: "1.8",
            opacity: "0.9",
            fontSize: "45px",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
          }}
        >
          Welcome to the best place for movie fans! Whether you just like
          watching movies sometimes or you're a big movie fan, our website has
          everything about movies that you need.
        </h1>
        <h2
          style={{
            marginTop: "10px",
            opacity: "0.9",
            fontSize: "40px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Top rated/popular movies{" "}
        </h2>
        <div className="movies">
          {movies.map((movie, i) => (
            <MovieCard onSetDetails={onSetDetails} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
