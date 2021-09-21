import React from "react";
import Header from "./Header";
import { FaAngleDoubleLeft, FaEnvelope, FaKey, FaLock } from "react-icons/fa";
import shaastraLogo from "./assets/Shaastra_logo.png";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import { useResendVerificationMailMutation } from "./generated";

function ResendVerificationMail() {
  const [email, setEmail] = React.useState<string>();
  const [resendVerificationMailMutation, { data, loading, error }] =
    useResendVerificationMailMutation({
      variables: {
        requestForgotPassInput: {
          email: "",
        },
      },
    });

  const ResendVerificationHandler = async (e: any) => {
    e.preventDefault();
    try {
      await resendVerificationMailMutation({
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

  if (data) return <p>Please check your mail to verify</p>;

  if (loading) return <p>Loading...</p>;

  if (error) {
    if (error.message.includes("Could not find any entity of type"))
      return <p>No account is associated with this email</p>;
    if (error.message === "Email has been verified before")
      return <p>{error.message}. Login to continue...</p>;
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
        <form onSubmit={ResendVerificationHandler}>
          <FaEnvelope />
          <h2>Resend the Verification Link</h2>
          <label>Enter your email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ResendVerificationMail;
