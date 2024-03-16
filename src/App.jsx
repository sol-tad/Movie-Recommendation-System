import React, { useState, createContext, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Adjust the import statement

import "./App.css";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "../src/components/Log_sign.css";
import FavoriteMovies from "./components/FavoriteMovies";
import Home from "./components/home";
import Movies from "./components/Movies";
import Details from "./components/Details";

const favContext = createContext();

function App() {
  const [details, setDetails] = useState({});
  const [favMovies, setFavMovies] = useState([]);
  // console.log(favMovies);

  const addFav = (movie) => {
    setFavMovies((prevItems) => [...prevItems, movie]);
  };

  const removeFav = (movieId) => {
    setFavMovies((prevItems) =>
      prevItems.filter((item) => item.id !== movieId)
    );
  };
  const movieContextValue = {
    favMovies,
    addFav,
    removeFav,
  };
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=5fe36522e1bd3066b9333dbc4be8d12e&language=en-US";
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [signUpData, setSignUpData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSignUp = (userData) => {
    setSignUpData([...signUpData, userData]);
  };

  return (
    <favContext.Provider value={movieContextValue}>
      <Router>
        <div className="app">
          <Header setSearchTerm={setSearchTerm} />

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  movies={movies}
                  searchTerm={searchTerm}
                  onSetDetails={setDetails}
                />
              }
            />
            <Route
              path="/home"
              element={
                <Home
                  movies={movies}
                  searchTerm={searchTerm}
                  onSetDetails={setDetails}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <Movies
                  movies={movies}
                  searchTerm={searchTerm}
                  onSetDetails={setDetails}
                />
              }
            />
            <Route path="/favorite" element={<FavoriteMovies />} />
            <Route
              path="/signup"
              element={<SignUp onSignUp={handleSignUp} />}
            />
            <Route path="/login" element={<Login signUpData={signUpData} />} />
            <Route path="/details" element={<Details details={details} />} />
          </Routes>
        </div>
      </Router>
    </favContext.Provider>
  );
}
const useFavMovie = () => useContext(favContext);

export { useFavMovie, favContext };

export default App;
