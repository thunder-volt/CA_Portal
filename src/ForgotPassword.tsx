import React from "react";
import Header from "./Header";
import { FaAngleDoubleLeft, FaLock } from "react-icons/fa";
import shaastraLogo from "./assets/Shaastra_logo.png";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import { Dialog, Box } from "@material-ui/core";
import { useReqForgotPassVerificationMutation } from "./generated";
import {useHistory} from "react-router"

function ForgotPassword() {
  const [email, setEmail] = React.useState<string>();
  const history = useHistory()
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

  if (data) {
    const closeHandler= () => {history.push('/')}
    return(
      <Dialog onClose={closeHandler} open={true} >
          <p>Please check your email for the link to reset your password.</p>
          <button onClick={closeHandler}>Close</button>
      </Dialog>
  );};

  if (loading) return(<Dialog open={true}> <p>Loading...</p> </Dialog>)

  if (error) {
    if (error.message.includes("Could not find any entity of type"))
    {
      const closeHandler= () => {history.push('/login')}
      return(
        <Dialog onClose={closeHandler} open={true} >
            <p>No account is associated with this email id. Please register.</p>
            <button onClick={closeHandler}>Close</button>
        </Dialog>
    );}
    else {
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
