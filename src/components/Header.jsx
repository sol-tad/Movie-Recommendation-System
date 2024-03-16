// Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header({ setSearchTerm }) {
  const handleSearch = (e) => setSearchTerm(e.target.value);
  // const handleFavoriteLinkClick = () => {
  //   history.push("/favorite");
  // };

  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <NavLink to="/home" className="Link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className="Link" activeClassName="active">
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/Favorite" className="Link" activeClassName="active">
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="Link" activeClassName="active">
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="Link" activeClassName="active">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <form>
                <input
                  type="text"
                  placeholder="Search Movies"
                  onChange={handleSearch}
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
