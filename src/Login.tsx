import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import loginIllustration from "./assets/illustration3.png";
import registerIllustration from "./assets/illustration4.png";
import shaastraLogo from "./assets/Shaastra_logo.png";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useCreateUserMutation, useLoginMutation } from "./generated";
import AuthContext from "./utils/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [login, setLogin] = React.useState(false);
  const [Lemail, setLemail] = React.useState("");
  const [Lpassword, setLpassword] = React.useState("");
  const [Rname, setRname] = React.useState("");
  const [Remail, setRemail] = React.useState("");
  const [Rpassword, setRpassword] = React.useState("");
  const [Rcpassword, setRcpassword] = React.useState("");
  const [notmatch, setNotmatch] = React.useState(false);
  const [Popup, setPopupDetails] = React.useState({
    message: "User Already Exists",
  });
  const { setRole } = useContext(AuthContext);
  const history = useHistory();

  const [loginMutation, { data, loading, error }] = useLoginMutation({
    onCompleted(data) {
      if (data?.login) {
        localStorage.setItem("name", data?.login.name);
        localStorage.setItem("email", data?.login.email);
        localStorage.setItem("role", data?.login.role);
        setRole(data?.login.role);
        history.push("/me");
      }
    },
  });

  const [
    createUserMutation,
    {
      data: createUserData,
      loading: createUserLoading,
      error: createUserError,
    },
  ] = useCreateUserMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (login)
        await loginMutation({
          variables: {
            loginInput: {
              email: Lemail,
              password: Lpassword,
            },
          },
        });
      if (!login) {
        if (notmatch) {
          window.alert("Password didn't match");
          return;
        }
        await createUserMutation({
          variables: {
            createUserInput: {
              name: Rname,
              email: Remail,
              password: Rpassword,
            },
          },
        });
      }
    } catch (errorInfo) {
      console.log(errorInfo);
    }
  };

  if (error || createUserError) {
    if (
      error?.message.includes(
        'Could not find any entity of type "User" matching'
      )
    )
      return <p>User not registered</p>;

    if (error?.message === "Invalid Credential")
      return <p>Invalid Credential</p>;

    if (error?.message === "Oops, email not verified!")
      return <p>Please verify your email</p>;

    if (
      createUserError?.message.includes(
        "duplicate key value violates unique constraint"
      )
    )
      return <p>User registered already. Please login to continue...</p>;
    else return <p>Some error occurred</p>;
  }

  if (loading || createUserLoading) {
    return <p>Loading...</p>;
  }

  if (createUserData) {
    if (createUserData.createUser)
      return (
        <p>
          Verification mail has been sent to your registered mail ID. Please
          verify your mail to continue...
        </p>
      );
    else return <p>Some error occurred</p>;
  }

  if (data) {
    return null;
  }

  return (
    <div className="Login">
      <div className="Login_header">
        <Link to="/">
          <img src={shaastraLogo} alt="" />
        </Link>
        <Link to="/">
          <FaAngleDoubleLeft />
          Back to Home
        </Link>
      </div>
      <div className="Login_Container">
        <div className="imgBox">
          <img src={loginIllustration} alt="" />
        </div>
        <form
          onSubmit={handleSubmit}
          style={
            login
              ? {
                  right: "10px",
                }
              : {
                  right: "calc(100% - 560px)",
                }
          }
        >
          {login ? (
            <>
              <h1>LOG IN</h1>
              <input
                required
                type="email"
                placeholder="EMAIL"
                value={Lemail}
                onChange={(e) => setLemail(e.target.value)}
              />
              <input
                required
                type="password"
                placeholder="PASSWORD"
                value={Lpassword}
                onChange={(e) => setLpassword(e.target.value)}
              />
              <button type="submit">LOGIN</button>
              <p>
                Don't have an account ?{" "}
                <span onClick={() => setLogin(false)}>Register</span>
              </p>
              <p>
                <Link to="/forgotpassword">Forgot password ?</Link>
              </p>
            </>
          ) : (
            <>
              <h1>REGISTER</h1>
              <input
                required
                type="text"
                placeholder="FULL NAME"
                value={Rname}
                onChange={(e) => setRname(e.target.value)}
              />
              <input
                required
                type="email"
                placeholder="EMAIL"
                value={Remail}
                onChange={(e) => setRemail(e.target.value)}
              />
              <input
                required
                type="password"
                id="password"
                placeholder="PASSWORD"
                value={Rpassword}
                onChange={(e) => setRpassword(e.target.value)}
              />
              <input
                required
                type="password"
                id="confirm_password"
                placeholder="CONFIRM PASSWORD"
                value={Rcpassword}
                onChange={(e) => {
                  setRcpassword(e.target.value);
                  if (e.target.value === "" || e.target.value === Rpassword) {
                    setNotmatch(false);
                  } else {
                    setNotmatch(true);
                  }
                }}
                style={{
                  border: `2px solid ${notmatch ? "crimson" : "transparent"}`,
                }}
              />
              <button type="submit">REGISTER</button>
              <p>
                Already have an account ?{" "}
                <span onClick={() => setLogin(true)}>Login</span>
              </p>
              <p>
                Didn't recieved verification Link ?{" "}
                <Link to="/resendverification">Resend</Link>
              </p>
            </>
          )}
        </form>
        <div className="imgBox">
          <img src={registerIllustration} alt="" />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Login;
