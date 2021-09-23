import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./MyApplication.css";
import images1 from "./assets/demopic.jpg";
import { useGetQuestionnaireQuery } from "./generated";
import AuthContext from "./utils/context";
import Header from "./Header";

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
      <Header />
      <div>
        <h1>APPLICATION</h1>
        <div className="flexdis">
          <div className="MyApplication_profile">
            <div className="MyApplication_Pro_detail">
              <h2>{localStorage.getItem("name")?.toLocaleUpperCase()}</h2>
              <h3>{localStorage.getItem("email")?.toLocaleUpperCase()}</h3>
            </div>
            <div className="MyApplication_Address">
              <div className="college_details">
                <ul className="ul11">
                  <li className="l11">
                    <b>COLLEGE NAME :</b>
                    {data?.getQuestionnaire.college.toLocaleUpperCase()}
                  </li>
                  <li className="l11">
                    <b>COLLEGE ADDRESS :</b>
                    {data?.getQuestionnaire.collegeaddress.toLocaleUpperCase()}
                  </li>
                  <li className="l11">
                    <b>CITY :</b>{" "}
                    {data?.getQuestionnaire.city.toLocaleUpperCase()}
                  </li>
                  <li className="l11">
                    <b>STATE :</b>
                    {data?.getQuestionnaire.state.toLocaleUpperCase()}
                  </li>
                  <li className="l11">
                    <b>DEGREE:</b>
                    {data?.getQuestionnaire.Degree.toLocaleUpperCase()}
                  </li>
                  <li className="l11">
                    <b>BRANCH :</b>
                    {data?.getQuestionnaire.branch.toLocaleUpperCase()}
                  </li>
                  <li className="l11">
                    <b>YEAR :</b>
                    {data?.getQuestionnaire.year.toLocaleUpperCase()}
                  </li>
                </ul>
              </div>
              <div className="Address_column2">
                <ul>
                  <li className="Address">
                    <b>POSTAL ADDRESS:</b>
                    {data?.getQuestionnaire.postaladdress.toLocaleUpperCase()}
                  </li>
                  <li>
                    <b>CITY</b>
                    <b>CITY :</b>{" "}
                    {data?.getQuestionnaire.pcity.toLocaleUpperCase()}
                  </li>
                  <li>
                    <b>STATE :</b>
                    {data?.getQuestionnaire.pstate.toLocaleUpperCase()}
                  </li>
                  <li>
                    <b>PINCODE :</b>
                    {data?.getQuestionnaire.pincode.toLocaleUpperCase()}
                  </li>
                  <li>
                    <b>CONTACT NUMBER :</b>
                    {data?.getQuestionnaire.contactno.toLocaleUpperCase()}
                  </li>
                  <li>
                    <b>WHATSAPP NUMBER :</b>
                    {data?.getQuestionnaire.whatsappno.toLocaleUpperCase()}
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="details">
              <b>APPLICATION STATUS: </b>
              {localStorage.getItem("role")?.toLocaleUpperCase()}
            </h3>
          </div>
        </div>
      </div>
      <div className="MyApplication_container">
        <h3 className="questionarise">OTHER GENERAL QUESTIONS</h3>
        <div className="questions">
          <h3>
            {" "}
            1. Were you a Shaastra CA previously? If Your answer to the above
            question is yes, which year ?
          </h3>
          <p>{data?.getQuestionnaire.Q1}</p>
          <h3> 2. Which social media sites do you use? </h3>
          <p>{data?.getQuestionnaire.Q2}</p>
          <h3> 3. Facebook Profile Link: </h3>
          <p>{data?.getQuestionnaire.Q3}</p>
          <h3> 4. Why do you wish to become a Campus Ambassador? </h3>
          <p>{data?.getQuestionnaire.Q4}</p>
          <h3>
            5. Why do you think you are the right candidate for this position?
          </h3>
          <p>{data?.getQuestionnaire.Q5}</p>
          <h3>
            6. Do you have any past experience in handling Positions of
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
