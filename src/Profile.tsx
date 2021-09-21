import React from "react";
import user from "./assets/Ranveer-Singh.jpg";
import "./Profile.css";
import Header from "./Header";
import { useContext } from "react";
import AuthContext from "./utils/context";
import { useGetQuestionnaireQuery } from "./generated";
import { useHistory } from "react-router-dom";

function Profile() {
  const { role } = useContext(AuthContext);
  const { data, error } = useGetQuestionnaireQuery();
  const history = useHistory();

  if (error) {
    if (error.message.includes("Access denied!")) {
      window.alert("Please login to contunie");
      history.push("./login");
    }
    return <p>Some error occurred</p>;
  }

  return (
    <>
      <Header />
      <div className="Profile">
        <div className="Profile_details">
          <div className="imgBox">
            <img src={user} alt="" />
          </div>
          <div className="contentBox">
            <h1>{localStorage.getItem("name")?.toLocaleUpperCase()}</h1>
            <p>{localStorage.getItem("email")?.toLocaleUpperCase()}</p>
            <p>
              {data?.getQuestionnaire.college.toLocaleUpperCase()},{" "}
              {data?.getQuestionnaire.state.toLocaleUpperCase()}
            </p>
            <p>
              {data?.getQuestionnaire.pcity.toLocaleUpperCase()},{" "}
              {data?.getQuestionnaire.pstate.toLocaleUpperCase()} -{" "}
              {data?.getQuestionnaire.pincode.toLocaleUpperCase()}
            </p>
          </div>
        </div>
        <p className="Profile_status">
          APPLICATION STATUS : <span>{role.toLocaleUpperCase()}</span>
        </p>
        <div className="Profile_edit">
          <form></form>
        </div>
      </div>
    </>
  );
}

export default Profile;
