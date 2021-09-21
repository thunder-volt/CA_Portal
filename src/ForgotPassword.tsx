import React from "react";
import Header from "./Header";
import { FaAngleDoubleLeft, FaLock } from "react-icons/fa";
import shaastraLogo from "./assets/Shaastra_logo.png";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import { useReqForgotPassVerificationMutation } from "./generated";

function ForgotPassword() {
  const [email, setEmail] = React.useState<string>();
  const [reqForgotPassVerificationMutation, { data, loading, error }] =
    useReqForgotPassVerificationMutation();

  const forgotPassReqHandler = async (e: any) => {
    e.preventDefault();
    try {
      await reqForgotPassVerificationMutation({
        variables: {
          requestForgotPassInput: {
            email: email!,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (data) return <p>Please check your mail to reset your password</p>;

  if (loading) return <p>Loading...</p>;

  if (error) {
    if (error.message.includes("Could not find any entity of type"))
      return <p>No account is associated with this email</p>;
    else return <p>Some error occurred</p>;
  }

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
        <form onSubmit={forgotPassReqHandler}>
          <FaLock />
          <h2>Trouble Logging In ?</h2>
          <label>Enter your email</label>
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
