// Header.jsx
import React from "react";
import { useHistory } from "react-router-dom";
import "./header.css";

function Header({ setSearchTerm }) {
  const history = useHistory();

  const handleSignUpLinkClick = () => {
    history.push("/signup");
  };

  const handleLoginLinkClick = () => {
    history.push("/login");
  };

  const handleHomeLinkClick = () => {
    history.push("/home");
  };

  const handleMoviesLinkClick = () => {
    history.push("/movies");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li onClick={handleHomeLinkClick}>Home</li>
            <li onClick={handleMoviesLinkClick}>Movies</li>
            <li>Favorite</li>
            <li onClick={handleSignUpLinkClick}>Sign Up</li>
            <li onClick={handleLoginLinkClick}>Login</li>
            <li></li>
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
