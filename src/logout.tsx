import React from "react";
import { useLogoutUserMutation } from "./generated";

const Logout = () => {
  const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
    onCompleted(date) {
      if (data?.logoutUser) {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("role");
      }
    },
  });

  const logoutHandler = async () => {
    try {
      await logoutUserMutation();
    } catch (e) {
      console.log(e);
    }
  };

  logoutHandler();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Some error occured</p>;
  if (data) {
    if (data.logoutUser) return <p>Logout successful</p>;
    return <p>Some error occured</p>;
  } else return <p>Loading...</p>;
};

export default Logout;
