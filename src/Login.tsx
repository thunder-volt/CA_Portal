import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import loginIllustration from "./assets/illustration3.png";
import registerIllustration from "./assets/illustration4.png";
import shaastraLogo from "./assets/Shaastra_logo.png";
import { FaAngleDoubleLeft } from "react-icons/fa";

function Login() {
  const [login, setLogin] = React.useState(false);
  const [Lemail, setLemail] = React.useState("");
  const [Lpassword, setLpassword] = React.useState("");
  const [Rname, setRname] = React.useState("");
  const [Remail, setRemail] = React.useState("");
  const [Rpassword, setRpassword] = React.useState("");
  const [Rcpassword, setRcpassword] = React.useState("");
  const [notmatch, setNotmatch] = React.useState(false);

  return (
    <div className="Login">
      <div className="Login_header">
        <img src={shaastraLogo} alt="" />
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
                type="text"
                placeholder="EMAIL"
                value={Lemail}
                onChange={(e) => setLemail(e.target.value)}
              />
              <input
                type="password"
                placeholder="PASSWORD"
                value={Lpassword}
                onChange={(e) => setLpassword(e.target.value)}
              />
              <button>LOGIN</button>
              <p>
                Don't have an account ?{" "}
                <span onClick={() => setLogin(false)}>Register</span>
              </p>
            </>
          ) : (
            <>
              <h1>REGISTER</h1>
              <input
                type="text"
                placeholder="FULL NAME"
                value={Rname}
                onChange={(e) => setRname(e.target.value)}
              />
              <input
                type="text"
                placeholder="EMAIL"
                value={Remail}
                onChange={(e) => setRemail(e.target.value)}
              />
              <input
                type="password"
                placeholder="PASSWORD"
                value={Rpassword}
                onChange={(e) => setRpassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="CONFIRM PASSWORD"
                value={Rcpassword}
                onChange={(e) => {
                  setRcpassword(e.target.value);
                  if (Rcpassword === "" || Rcpassword === Rpassword) {
                    setNotmatch(false);
                  } else {
                    setNotmatch(true);
                  }
                }}
                style={{
                  border: `2px solid ${notmatch ? "crimson" : "transparent"}`,
                }}
              />
              <button>REGISTER</button>
              <p>
                Already have an account ?{" "}
                <span onClick={() => setLogin(true)}>Login</span>
              </p>
            </>
          )}
        </form>
        <div className="imgBox">
          <img src={registerIllustration} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
