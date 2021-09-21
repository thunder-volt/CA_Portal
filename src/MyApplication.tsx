import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Application.css";
import images1 from "./assets/demopic.jpg";
import { useGetQuestionnaireQuery } from "./generated";
import AuthContext from "./utils/context";

function MyApplication() {
  const history = useHistory();
  const { data, loading, error } = useGetQuestionnaireQuery();

  if (loading) return <p>Loading...</p>;

  if (error) {
    if (error.message.includes("Access denied!")) {
      window.alert("Please login to contunie");
      history.push("./login");
    }
    return <p>Some error occurred</p>;
  }

  return (
    <div className="Application">
      <div>
        <h1>APPLICATION</h1>
        <div className="flexdis">
          <div>
            <h2>PROFILE DETAILS :</h2>
            <h2 className="details">
              {localStorage.getItem("name")?.toLocaleUpperCase()}
            </h2>
            <h2 className="details">
              {localStorage.getItem("email")?.toLocaleUpperCase()}
            </h2>
          </div>
          <div>
            <img className="photo" src={images1} alt="" />
          </div>
        </div>
        <div className="column">
          <div>
            <ul className="ul11">
              <li>
                <b>COLLEGE NAME :</b>{" "}
                {data?.getQuestionnaire.college.toLocaleUpperCase()}
              </li>
              <li>
                <b>COLLEGE ADDRESS :</b>{" "}
                {data?.getQuestionnaire.collegeaddress.toLocaleUpperCase()}
              </li>
              <li>
                <b>CITY :</b> {data?.getQuestionnaire.city.toLocaleUpperCase()}
              </li>
              <li>
                <b>STATE :</b>{" "}
                {data?.getQuestionnaire.state.toLocaleUpperCase()}
              </li>
              <li>
                <b>DEGREE:</b>{" "}
                {data?.getQuestionnaire.Degree.toLocaleUpperCase()}
              </li>
              <li>
                <b>BRANCH :</b>{" "}
                {data?.getQuestionnaire.branch.toLocaleUpperCase()}
              </li>
              <li>
                <b>YEAR :</b> {data?.getQuestionnaire.year.toLocaleUpperCase()}
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <b>POSTAL ADDRESS:</b>{" "}
                {data?.getQuestionnaire.postaladdress.toLocaleUpperCase()}
              </li>
              <li>
                <b>CITY :</b> {data?.getQuestionnaire.pcity.toLocaleUpperCase()}
              </li>
              <li>
                <b>STATE :</b>{" "}
                {data?.getQuestionnaire.pstate.toLocaleUpperCase()}
              </li>
              <li>
                <b>PINCODE :</b>{" "}
                {data?.getQuestionnaire.pincode.toLocaleUpperCase()}
              </li>
              <li>
                <b>CONTACT NUMBER :</b>{" "}
                {data?.getQuestionnaire.contactno.toLocaleUpperCase()}
              </li>
              <li>
                <b>WHATSAPP NUMBER :</b>{" "}
                {data?.getQuestionnaire.whatsappno.toLocaleUpperCase()}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="questionarise">OTHER GENERAL QUESTIONS</h3>
        <div className="questions">
          <h3>
            Were you a Shaastra CA previously? If Your answer to the above
            question is yes, which year ?
          </h3>
          <p>{data?.getQuestionnaire.Q1}</p>
          <h3>Which social media sites do you use? </h3>
          <p>{data?.getQuestionnaire.Q2}</p>
          <h3> Facebook Profile Link: </h3>
          <p>
            {data?.getQuestionnaire.Q3}
            <link rel="stylesheet" href="styles.css" />
          </p>
          <h3> Why do you wish to become a Campus Ambassador? </h3>
          <p>{data?.getQuestionnaire.Q4}</p>
          <h3>
            Why do you think you are the right candidate for this position?
          </h3>
          <p>{data?.getQuestionnaire.Q5}</p>
          <h3>
            Do you have any past experience in handling Positions of
            Responsibility?{" "}
          </h3>
          <p>{data?.getQuestionnaire.Q6}</p>
          <label htmlFor="sfafaferfaef"></label>
        </div>
      </div>
    </div>
  );
}

export default MyApplication;
