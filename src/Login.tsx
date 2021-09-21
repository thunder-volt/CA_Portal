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
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

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
  const [e, setError] = React.useState(false)
  const { setRole } = useContext(AuthContext);
  const history = useHistory();

  // var { isOpen, onOpen, onClose } = useDisclosure()

  const [loginMutation, { data, loading, error }] = useLoginMutation({
    onCompleted(data) {
      if (data?.login) {
        console.log(data.login)
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
        console.log('done')
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
    setError(true)
    if (
      error?.message.includes(
        'Could not find any entity of type "User" matching'
      )
    )
    setPopupDetails({message: "User not registered"})
    else
    if (error?.message === "Invalid Credential")
      setPopupDetails({message: "Invalid Credentials"})
    else
    if (error?.message === "Oops, email not verified!")
      setPopupDetails({message: "Please verify your email"})
    else
    if (
      createUserError?.message.includes(
        "duplicate key value violates unique constraint"
      )
    )
      setPopupDetails({message: "User registered already. Please login to continue..."})
    else setPopupDetails({message: "Some error occured"})
  }


  if (loading || createUserLoading) {
    setPopupDetails({message: "Loading..."})
  }

  if (createUserData) {
    if (createUserData.createUser)
      setPopupDetails({message: " Verification mail has been sent to your registered mail ID. Please verify your mail to continue..."})
    else setPopupDetails({message: "Some error occured"})
  
  if (data) {
    return null;
  }
}
const onClose = () => {history.push('')}
  // if(Popup.message != "User Already Exists")
  //   return <Modal isOpen={true} onClose={onClose}>
  //   <ModalOverlay></ModalOverlay>
  //   <ModalContent backgroundColor="#AACDBE" color="#222244">
  //       <ModalCloseButton onClick={onClose}></ModalCloseButton>
  //       <ModalBody >
  //           <p>"error</p>
  //       </ModalBody>
  //   </ModalContent>
  //   </Modal>
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
          {/* {
            error ? 
            <Modal isOpen={true} onClose={onClose}>
                    <ModalOverlay></ModalOverlay>
                    <ModalContent backgroundColor="#AACDBE" color="#222244">
                        <ModalCloseButton onClick={onClose}></ModalCloseButton>
                        <ModalBody >
                            <p>{error?.message}</p>
                        </ModalBody>
                    </ModalContent>
                    </Modal>
                    : null
          } */}
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
