import React from "react";
import user from "./assets/Ranveer-Singh.jpg";
import "./Profile.css";
import Header from "./Header";

function Profile() {
  return (
    <>
      <Header />
      <div className="Profile">
        <div className="Profile_details">
          <div className="imgBox">
            <img src={user} alt="" />
          </div>
          <div className="contentBox">
            <h1>FULL NAME</h1>
            <p>EMAIL@GMAIL.COM</p>
            <p>INDIAN INSTITUTE OF TECHNOLOGY MADRAS, TAMIL NADU</p>
            <p>CHENNAI , TAMIL NADU - 444444</p>
          </div>
        </div>
        <p className="Profile_status">
          APPLICATION STATUS : <span>PENDING</span>
        </p>
        <div className="Profile_edit">
          <form></form>
        </div>
      </div>
    </>
  );
}

export default Profile;
