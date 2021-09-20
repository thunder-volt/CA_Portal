import React from "react";
import Header from "./Header";
import { FaAngleDoubleLeft, FaEnvelope, FaKey, FaLock } from "react-icons/fa";
import shaastraLogo from "./assets/Shaastra_logo.png";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ResendVerificationMail() {
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
          <FaEnvelope />
          <h2>Resend the Verification Link</h2>
          <label>Enter your email</label>
          <input type="email" placeholder="Email" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ResendVerificationMail;
