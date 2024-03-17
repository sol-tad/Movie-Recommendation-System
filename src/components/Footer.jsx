import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="icon">
        <FaFacebookSquare />
        <FaSquareGithub />
        <FaLinkedin />
        <FaInstagramSquare />
      </div>

      <p>&copy;2024 Copyright:Gdsc-Team 6</p>
    </footer>
  );
}
export default Footer;
