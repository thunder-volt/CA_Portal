import React from "react";
import { useLogoutUserMutation } from "./generated";
import { Dialog, Box } from "@material-ui/core";
import { useHistory } from "react-router";
import { useContext } from "react";
import AuthContext from "./utils/context";

const Logout = () => {
  const { setRole } = useContext(AuthContext)
  const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation();
  const history = useHistory()

  const logoutHandler = async () => {
    try {
      await logoutUserMutation();
    } catch (e) {
      console.log(e);
    }
  };

  logoutHandler();

  if (loading) return <Dialog open={true} ><p>Loading...</p></Dialog>;
  if (error)
  {
    const closeHandler= () => {window.location.reload()}
    return(
      <Dialog onClose={closeHandler} open={true} >
          <p>Some error occurred</p>
          <button onClick={closeHandler}>Close</button>
      </Dialog>
  );}
  if (data) {
    if (data.logoutUser) {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      const closeHandler= () => {
        history.push('/');
        setRole("")
      }
      return(
        <Dialog onClose={closeHandler} open={true} >
            <p>Logout successful.</p>
            <button onClick={closeHandler}>Close</button>
        </Dialog>
    );}
    {
      const closeHandler= () => {history.push('/')}
      return(
        <Dialog onClose={closeHandler} open={true} >
            <p>Some error occurred</p>
            <button onClick={closeHandler}>Close</button>
        </Dialog>
    );}
  } else return <Dialog open={true} ><p>Loading...</p></Dialog>;
};

export default Logout;
