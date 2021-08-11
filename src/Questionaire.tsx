import {
  faAngleRight,
  faHandPointRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NONAME } from "dns";
import React from "react";
import Header from "./Header";
import "./Questionaire.css";

function Questionaire() {
  const [TermsCondition, setTermsCondition] = React.useState(false);
  const [pastExperiennce, setpastExperiennce] = React.useState(false);

  return (
    <>
      <Header />
      <div className="Questionaire">
        <h1>QUESTIONAIRE</h1>
        <form>
          <div className="wrapper">
            <div className="left">
              <input required type="text" placeholder="COLLEGE NAME" />
              <input required type="text" placeholder="COLLEGE ADDRESS" />
              <input required type="text" placeholder="CITY" />
              <input required type="text" placeholder="STATE" />
              <input required type="text" placeholder="DEGREE" />
              <input required type="text" placeholder="BRANCH" />
              <input required type="text" placeholder="YEAR" />
            </div>
            <div className="right">
              <textarea placeholder="POSTAL ADDRESS"></textarea>
              <input required type="text" placeholder="CITY" />
              <input required type="text" placeholder="STATE" />
              <input required type="text" placeholder="PINCODE" />
              <input required type="text" placeholder="CONTACT NUMBER" />
              <input required type="text" placeholder="WHATSAPP NUMBER" />
            </div>
          </div>
          <h3>OTHER GENERAL QUESTIONS</h3>
          <p>Were you a Shaastra CA previously ? </p>
          <div className="inputBox">
            <input required type="radio" name="previouslyCA" value="yes" />
            <label>YES</label>
            <input required type="radio" name="previouslyCA" value="no" />
            <label>NO</label>
          </div>
          <p>If Your answer to the above question is yes, which year ? </p>
          <select name="previouslyCAyear">
            <option value="">SELECT</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2013">2013</option>
          </select>
          <p>Which social media sites do you use ? </p>
          <div className="inputBox socialUse">
            <input type="checkbox" name="socialHandles" id="" />
            <label>Facebook</label>
            <input type="checkbox" name="socialHandles" id="" />
            <label>LinkedIn</label>
            <input type="checkbox" name="socialHandles" id="" />
            <label>Twitter</label>
            <input type="checkbox" name="socialHandles" id="" />
            <label>Instagram</label>
          </div>
          {/* <input required type="text" placeholder="(Short answer type)" /> */}
          <p>Facebook Profile Link: </p>
          <input required type="text" placeholder="URL" />
          <p>Why do you wish to become a Campus Ambassador ? </p>
          <input required type="text" placeholder="(Short answer type)" />
          <p>
            Why do you think you are the right candidate for this position ?{" "}
          </p>
          <input required type="text" placeholder="(Short answer type)" />
          <p>
            Do you have any past experience in handling Positions of
            Responsibility ?{" "}
          </p>
          <div style={{ marginBottom: "10px" }} className="inputBox">
            <input
              required
              type="radio"
              onClick={() => setpastExperiennce(true)}
              name="pastExperience"
              value="yes"
            />
            <label>YES</label>
            <input
              required
              type="radio"
              onClick={() => setpastExperiennce(false)}
              name="pastExperience"
              value="no"
            />
            <label>NO</label>
          </div>
          <input
            type="text"
            style={{
              display: pastExperiennce ? "block" : "none",
            }}
            placeholder="Describe the experience"
          />
          <div className="inputBox termsUse">
            <input required type="checkbox" />
            <label>
              I wish to represent Shaastra 2022 for my institute and I have read
              and agree to all the{" "}
              <span
                style={{ color: "#564ed3", cursor: "pointer" }}
                onClick={() => setTermsCondition(true)}
              >
                Terms and Conditions
              </span>{" "}
              stated by Shaastra for the Campus Ambassador Program on the CA
              website.
            </label>
          </div>
          <button>SUBMIT</button>
        </form>
        <div className={`termsAndCondition ${TermsCondition ? "active" : ""}`}>
          <h2>
            TERMS AND CONDITIONS FOR CA PROGRAM, SHAASTRA 2021, IIT MADRAS
          </h2>
          <button onClick={() => setTermsCondition(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHandPointRight} />
              The CA will be a part of the organizing team of Shaastra 2021 and
              he/she must ensure that his/her college has no objection to this.
              Shaastra will not be responsible for any issues arising due to
              objection of college authorities in the later stage
            </li>
            <li>
              <FontAwesomeIcon icon={faHandPointRight} />
              The internship certificate will only be provided subject to
              completion of fixed minimum points
            </li>
            <li>
              <FontAwesomeIcon icon={faHandPointRight} />
              Shaastra reserves the right to change the points awarded for every
              task and minimum points required for the certificate as well as
              bonus incentives and goodies.
            </li>
            <li>
              <FontAwesomeIcon icon={faHandPointRight} />
              Tasks allotted to CAs will include, but not be limited to:
              <ul>
                <li>
                  <FontAwesomeIcon icon={faAngleRight} />
                  Putting up posters
                </li>
                <li>
                  <FontAwesomeIcon icon={faAngleRight} />
                  Sharing posts put up by the Shaastra Facebook page
                </li>
                <li>
                  <FontAwesomeIcon icon={faAngleRight} />
                  Sending mails for publicity
                </li>
                <li>
                  <FontAwesomeIcon icon={faAngleRight} />
                  Getting MoUs signed
                </li>
                <li>
                  <FontAwesomeIcon icon={faAngleRight} />
                  Taking care of organizational aspects of events including
                  facilities and requirements
                </li>
                <li>
                  <FontAwesomeIcon icon={faAngleRight} />
                  Visiting colleges or other public venues for carrying out
                  on-ground publicity
                </li>
                <li>
                  <FontAwesomeIcon icon={faAngleRight} />
                  Getting participants through referrals
                </li>
              </ul>
            </li>
            <li>
              <FontAwesomeIcon icon={faHandPointRight} />
              All official communication will be done via the CA portal and
              email. It is the responsibility of the CA to check his/her email
              and the CA portal regularly and acknowledge the tasks assigned to
              him/her.
            </li>
            <li>
              <FontAwesomeIcon icon={faHandPointRight} />
              Should there be any discrepancies or issues, the decision taken by
              Shaastra shall be final and binding
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Questionaire;
