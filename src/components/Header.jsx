// Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header({ setSearchTerm, searchTerm, setMovies, movies }) {
  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=5fe36522e1bd3066b9333dbc4be8d12e&query=";

  // const handleSearch = (e) => setSearchTerm(e.target.value);
  function handleSearch(e) {
    e.preventDefault();

    const search = API_SEARCH + searchTerm;
    console.log(search);
    fetch(search)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }

  // const handleFavoriteLinkClick = () => {
  //   history.push("/favorite");
  // };

  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <NavLink to="/home" className="Link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className="Link">
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/Favorite" className="Link">
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="Link">
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="Link">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <form onSubmit={(e) => handleSearch(e)}>
                <input
                  type="text"
                  placeholder="Search Movies"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button id="search">Search</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
