import React from "react";
import Header from "./Header";
import { FaAngleDoubleLeft, FaEnvelope, FaKey, FaLock } from "react-icons/fa";
import shaastraLogo from "./assets/Shaastra_logo.png";
import { Dialog, Box } from "@material-ui/core";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import { useResendVerificationMailMutation } from "./generated";

function ResendVerificationMail() {
  const [email, setEmail] = React.useState<string>();
  const history = useHistory()
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

  if (data) {
    const closeHandler= () => {history.push('/')}
    return(
      <Dialog onClose={closeHandler} open={true} >
          <p>Please check your email to verify</p>
          <button onClick={closeHandler}>Close</button>
      </Dialog>
  );}

  if (loading) return <Dialog open={true}><p>Please check your email to verify</p></Dialog>

  if (error) {
    if (error.message.includes("Could not find any entity of type"))
    {
      const closeHandler= () => {history.push('/login')}
      return(
        <Dialog onClose={closeHandler} open={true} >
            <p>No account is associated with this email ID. Please register.</p>
            <button onClick={closeHandler}>Close</button>
        </Dialog>
    );}
    if (error.message === "Email has been verified before")
    {
      const closeHandler= () => {history.push('/login')}
      return(
        <Dialog onClose={closeHandler} open={true} >
            <p>Login to continue</p>
            <button onClick={closeHandler}>Close</button>
        </Dialog>
    );}
    else  {
      const closeHandler= () => {window.location.reload()}
      return(
        <Dialog onClose={closeHandler} open={true} >
            <p>Some error occured</p>
            <button onClick={closeHandler}>Close</button>
        </Dialog>
    );}
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
