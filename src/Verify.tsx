import React from "react";
import { useHistory, useParams } from "react-router";
import { useVerifyUserMutation } from "./generated";
import { Dialog, Box, Button } from "@material-ui/core";
import "./PopUp.css"

const Verify = () => {
  const history = useHistory();
  const { token } = useParams<{ token: string }>();

  const [verifyUserMutation, { data, loading, error }] =
    useVerifyUserMutation();

  const verifyHandler = async () => {
    try {
      await verifyUserMutation({
        variables: {
          token: token!,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  verifyHandler();

  if (data) {
    if (data.verifyUser) {
      console.log("yes")
      const closeHandler= () => {history.push('/login')}
      return(
        <Dialog onClose={closeHandler} open={true} >
          
            <p>Verification successful. Please login to continue.</p>
            <button onClick={closeHandler}>Close</button>
            
        </Dialog>
      )
      // history.replace("/login");
    } else return <p></p>;
  }

  if (loading) {
    // const closeHandler= () => {history.push('/login')}
    return(
      <Dialog open={true} >
          <p>Loading...</p>
      </Dialog>
    )}
  if (error) {
    if (error.message.includes("jwt expired"))
    {const closeHandler= () => {history.push('/resendverification')}
      return(
        <Dialog onClose={closeHandler} open={true} >
          
            <p>Verification link expired. Please request new verification link.</p>
            <button onClick={closeHandler}>Close</button>
            
        </Dialog>
    );}
    if (error.message.includes("jwt"))
    {
      const closeHandler= () => {history.push('/resendverification')}
      return(
        <Dialog onClose={closeHandler} open={true} >
          
            <p>Invalid verification link. Please request new verification link.</p>
            <button onClick={closeHandler}>Close</button>
            
        </Dialog>
    );}
    else{
      const closeHandler= () => {history.push('/')}
      return(
        <Dialog onClose={closeHandler} open={true} >
          
            <p>Some error occurred.</p>
            <button onClick={closeHandler}>Close</button>
            
        </Dialog>
    );};
  } else {
    const closeHandler= () => {history.push('/')}
    return(
      <Dialog onClose={closeHandler} open={true} >
        
          <p>Some error occurred.</p>
          <button onClick={closeHandler}>Close</button>
          
      </Dialog>
  );};
};

export default Verify;
