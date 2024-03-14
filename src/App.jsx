import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./Log_sign.css";

function App() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=5fe36522e1bd3066b9333dbc4be8d12e&language=en-US";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  console.log(movies);

  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path="/home">
            <div className="movies">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </Route>
          <Route path="/movies">
            <div className="movies">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </Route>

          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
