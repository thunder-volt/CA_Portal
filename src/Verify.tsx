import React from "react";
import { useHistory, useParams } from "react-router";
import { useVerifyUserMutation } from "./generated";

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
      window.alert("User verification successfull");
      history.replace("/login");
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
  } else return <p>Some error occurred</p>;
};

export default Verify;
