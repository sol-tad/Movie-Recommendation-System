import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>Favorite</li>
            <li>Sign Up</li>
            <li>Login</li>
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
