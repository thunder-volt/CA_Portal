import React from "react";
import Header from "./Header";
import { FaAngleDoubleLeft, FaKey, FaLock } from "react-icons/fa";
import shaastraLogo from "./assets/Shaastra_logo.png";
import { Link, useHistory, useParams } from "react-router-dom";
import "./ForgotPassword.css";
import { useResetPasswordMutation } from "./generated";

function ResetPassword() {
  const history = useHistory();
  const { token } = useParams<{ token: string }>();
  const [password, setPassword] = React.useState<string>();
  const [isPMatch, setisPMatch] = React.useState(false);
  const [resetPasswordMutation, { data, loading, error }] =
    useResetPasswordMutation();
  const ResetPasswordHandler = async (e: any) => {
    e.preventDefault();
    try {
      await resetPasswordMutation({
        variables: {
          resetPasswordInput: {
            token: token,
            newPassword: password!,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  if (data) {
    if (data.resetPassword) {
      window.alert("Password reset successful");
      history.push("./login");
    } else return <p></p>;
  }

  if (loading) return <p>Loading...</p>;

  if (error) {
    if (error.message.includes("jwt expired"))
      return (
        <p>Verification Link expired. Please request new verification link</p>
      );
    if (error.message.includes("jwt"))
      return (
        <p>Invalid verification Link. Please request new verification link</p>
      );
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
        <form onSubmit={ResetPasswordHandler}>
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

export default ResetPassword;
