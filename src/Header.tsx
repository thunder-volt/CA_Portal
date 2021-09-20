import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import shaastraLogo from "./assets/Shaastra_logo.png";
import { useGetQuestionnaireQuery } from "./generated";
import "./Header.css";
import AuthContext from "./utils/context";

function Header() {
  const [header, setHeader] = React.useState(false);
  const { data } = useGetQuestionnaireQuery();
  const { role } = useContext(AuthContext);
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
        {role !== null && role !== "" && data?.getQuestionnaire === null && (
          <li>
            <Link to="/questionaire">QUESTIONAIRE</Link>
          </li>
        )}
        {role !== null && role !== "" && data?.getQuestionnaire !== null && (
          <li>
            <Link to="/questionaire">MY APPLICATION</Link>
          </li>
        )}
        {role !== null && role !== "" && (
          <li>
            <Link to="/profile">PROFILE</Link>
          </li>
        )}
        {role === null || role === "" ? (
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        ) : (
          <li>
            <Link to="/logout">LOGOUT</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
