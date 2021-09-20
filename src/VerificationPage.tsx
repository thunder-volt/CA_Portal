import React from "react";
import Header from "./Header";
import { FaAngleDoubleLeft, FaKey, FaLock } from "react-icons/fa";
import shaastraLogo from "./assets/Shaastra_logo.png";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function VerificationPage() {
  const [password, setPassword] = React.useState("");
  const [isPMatch, setisPMatch] = React.useState(false);

  return (
    <div className="ForgotPassword">
      <div className="ForgotPassword_header">
        <Link to="/">
          <img src={shaastraLogo} alt="" />
        </Link>
        <Link to="/login">
          <FaAngleDoubleLeft />
          Back to Login
        </Link>
      </div>
      <div className="ForgotPassword_Container">
        <form>
          <FaKey />
          <h2>Set Password</h2>
          <label>New Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <input
            style={
              isPMatch ? { border: "1px solid crimson" } : { border: "none" }
            }
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              if (e.target.value === "" || e.target.value === password) {
                setisPMatch(false);
              } else {
                setisPMatch(true);
              }
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default VerificationPage;
