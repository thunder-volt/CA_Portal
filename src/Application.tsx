import { stringify } from "querystring";
import React from "react";
import { useHistory, useParams } from "react-router";
import "./MyApplication.css";
import { FaUserCircle } from "react-icons/fa";
import images1 from "./assets/demopic.jpg";
import {
  ApplicationResultInput,
  useApplicationResultMutation,
  useGetQuestionnaireByUserIdQuery,
  useGetUserQuery,
  UserRole,
} from "./generated";

function Application() {
  let { id }: any = useParams();
  console.log(id);
  const { data, loading, error } = useGetQuestionnaireByUserIdQuery({
    variables: { userid: id },
  });
  const [applicationMutation] = useApplicationResultMutation();
  const {
    data: getUserData,
    loading: getUserLoading,
    error: getUserError,
  } = useGetUserQuery({ variables: { userId: id } });
  const history = useHistory();
  const [coord, setCoord] = React.useState("");
  var [input, setInput] = React.useState<ApplicationResultInput>({
    coord: "",
    id: id,
    isSelected: false,
  });
  console.log(data);
  console.log(getUserData?.getUser?.role);

  const accept = async () => {
    setCoord(coord);
    await setInput((prevState) => {
      return { ...prevState, isSelected: true, id: id, coord: coord };
    });
    try {
      console.log(coord);
      const resp = await applicationMutation({
        variables: { data: { isSelected: true, id: id, coord: coord } },
      });
      console.log(resp.data?.applicationResult);
      console.log(getUserData?.getUser?.role);
    } catch (err) {
      window.alert(err);
    }
    history.push("/search");
  };
  const reject = async () => {
    setInput({ ...input, isSelected: false, id: id, coord: coord });
    try {
      const resp = await applicationMutation({ variables: { data: input } });
      console.log(resp.data?.applicationResult);
      console.log(getUserData?.getUser?.role);
    } catch (err) {
      window.alert(err);
    }
    history.push("/search");
  };

  if (getUserData)
    return (
      <div className="Application">
        <div>
          <h1>APPLICATION</h1>
          <div className="flexdis">
            <div>
              <h2>PROFILE DETAILS :</h2>
              <h2 className="details">{getUserData.getUser?.name}</h2>
              <h2 className="details">{getUserData.getUser?.email}</h2>
            </div>
            <div>
              <FaUserCircle className="photo" size="30%"></FaUserCircle>
              {/* <img className="photo" src={FaUserCircle} alt="" /> */}
            </div>
          </div>
          <div className="column">
            <div>
              <ul className="ul11">
                <li>
                  <b>COLLEGE NAME :</b> {data?.getQuestionnaireByUserId.college}
                </li>
                <li>
                  <b>COLLEGE ADDRESS :</b>{" "}
                  {data?.getQuestionnaireByUserId.collegeaddress}
                </li>
                <li>
                  <b>CITY :</b> {data?.getQuestionnaireByUserId.city}
                </li>
                <li>
                  <b>STATE :</b> {data?.getQuestionnaireByUserId.state}
                </li>
                <li>
                  <b>DEGREE:</b> {data?.getQuestionnaireByUserId.Degree}
                </li>
                <li>
                  <b>BRANCH :</b> {data?.getQuestionnaireByUserId.branch}
                </li>
                <li>
                  <b>YEAR :</b> {data?.getQuestionnaireByUserId.year}
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <b>POSTAL ADDRESS:</b>{" "}
                  {data?.getQuestionnaireByUserId.postaladdress}
                </li>
                <li>
                  <b>CITY :</b> {data?.getQuestionnaireByUserId.pcity}
                </li>
                <li>
                  <b>STATE :</b> {data?.getQuestionnaireByUserId.pstate}
                </li>
                <li>
                  <b>PINCODE :</b> {data?.getQuestionnaireByUserId.pincode}
                </li>
                <li>
                  <b>CONTACT NUMBER :</b>{" "}
                  {data?.getQuestionnaireByUserId.contactno}
                </li>
                <li>
                  <b>WHATSAPP NUMBER :</b>{" "}
                  {data?.getQuestionnaireByUserId.whatsappno}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <h3 className="questionarise">OTHER GENERAL QUESTIONS</h3>
          <div className="questions">
            <h3>Were you a Shaastra CA previously?</h3>
            <div>
              <p>{data?.getQuestionnaireByUserId.Q1 === "NO" ? "NO" : "YES"}</p>
            </div>
            <p></p>
            <h3>If Your answer to the above question is yes, which year ?</h3>
            <p>
              {data?.getQuestionnaireByUserId.Q1 === "NO"
                ? "-"
                : data?.getQuestionnaireByUserId.Q1}
            </p>
            <h3>Which social media sites do you use? </h3>
            <p>{data?.getQuestionnaireByUserId.Q2}</p>
            <h3> Facebook Profile Link: </h3>
            <p>
              {data?.getQuestionnaireByUserId.Q3}
              <link rel="stylesheet" href="styles.css" />
            </p>
            <h3> Why do you wish to become a Campus Ambassador? </h3>
            <p>{data?.getQuestionnaireByUserId.Q4}</p>
            <h3>
              Why do you think you are the right candidate for this position?
            </h3>
            <p>{data?.getQuestionnaireByUserId.Q5}</p>
            <h3>
              Do you have any past experience in handling Positions of
              Responsibility?{" "}
            </h3>
            <p>{data?.getQuestionnaireByUserId.Q6}</p>
            <label htmlFor="sfafaferfaef"></label>
            <select
              onChange={async (e) => {
                await setCoord(e.target.value);
                console.log(coord);
              }}
            >
              <option value="Anshid">Anshid</option>
              <option value="Samrudha Lakshmi">Samrudha Lakshmi</option>
              <option value="Poojitha R">Poojitha R</option>
              <option value="Sukriti">Sukriti </option>
              <option value="Vishwa">Vishwa</option>
              <option value="Pavan Kumar">Pavan Kumar</option>
              <option value="Joshik Sravan">Joshik Sravan</option>
              <option value="Sadguru Sharan">Sadguru Sharan</option>
              <option value="Keerthana">Keerthana</option>
              <option value="Ankit">Ankit</option>
              <option value="Gokul Vijay">Gokul Vijay</option>
              <option value="Vinaykumar">Vinaykumar</option>
              <option value="Aditya">Aditya</option>
              <option value="Rahul Bumb">Rahul Bumb</option>
              <option value="Umesh">Umesh</option>
              <option value="Reethika">Reethika</option>
            </select>
          </div>
        </div>
        <button className="submit" onClick={accept}>
          ACCEPT
        </button>
        <button className="decline" onClick={reject}>
          DECLINE
        </button>
      </div>
    );
  else return null;
}

export default Application;
