import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "../src/components/Log_sign.css";

function App() {
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
    <Router>
      <div className="app">
        <Header setSearchTerm={setSearchTerm} />

        <Switch>
          <Route path="/home">
            <div className="movies">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </Route>
          <Route path="/movies">
            <div className="movies">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </Route>

         <Route path="/signup" render={(props) => <SignUp {...props} onSignUp={handleSignUp} />} />
          <Route path="/login" render={(props) => <Login {...props} signUpData={signUpData} />} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
