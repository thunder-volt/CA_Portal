import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import shaastraLogo from "./assets/Shaastra_logo.png";
import "./Header.css";

function Header() {
  const [header, setHeader] = React.useState(false);
  return (
    <div className="Header">
      <img src={shaastraLogo} alt="" />
      <button onClick={() => setHeader(!header)}>
        <FaBars />
      </button>
      <ul className={header ? "active" : ""}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/questionaire">QUESTIONAIRE</Link>
        </li>
        <li>
          <Link to="/profile">PROFILE</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
