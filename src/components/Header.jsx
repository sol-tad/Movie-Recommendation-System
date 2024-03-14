import React from "react";
import { Link,useHistory } from "react-router-dom";
import "./header.css";
import Login from "./Login";
import SignUp from "./SignUp";

function Header() {
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
                <input type="text" placeholder="Search Movies" />
                <button>Search</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
