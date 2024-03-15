import React from "react";
 import Header from "./Header";
import { useFavMovie } from "../App";
import FavMovieCard from "./FavMovieCard";
import "./FavoriteMovies.css"


function FavoriteMovies() {
  const { favMovies } = useFavMovie();

    console.log(favMovies)
  return (
    <div>
      <div className="movies">
        {favMovies.map((movie) => (
          <FavMovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default FavoriteMovies;
