import {
  faAngleRight,
  faHandPointRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaAngleRight, FaHandPointRight, FaTimes } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useFillQuestionnaireMutation } from "./generated";
import Header from "./Header";
import "./Questionaire.css";

function Questionaire() {
  const history = useHistory();
  const [TermsCondition, setTermsCondition] = React.useState<boolean>();
  const [pastCAExperiennce, setPastCAExperiennce] = React.useState<boolean>();
  const [pastExperiennce, setpastExperiennce] = React.useState<boolean>();

  const [college, setCollege] = React.useState<string>();
  const [collegeaddress, setCollegeaddress] = React.useState<string>();
  const [city, setCity] = React.useState<string>();
  const [state, setState] = React.useState<string>();
  const [Degree, setDegree] = React.useState<string>();
  const [branch, setBranch] = React.useState<string>();
  const [year, setYear] = React.useState<string>();
  const [postaladdress, setPostaladdress] = React.useState<string>();
  const [pcity, setPcity] = React.useState<string>();
  const [pstate, setPstate] = React.useState<string>();
  const [pincode, setPincode] = React.useState<string>();
  const [contactno, setContactno] = React.useState<string>();
  const [whatsappno, setWhatsappno] = React.useState<string>();
  const [Q1, setQ1] = React.useState<string>();
  const [Q2, setQ2] = React.useState<string>();
  const [Q2a, setQ2a] = React.useState<boolean>();
  const [Q2b, setQ2b] = React.useState<boolean>();
  const [Q2c, setQ2c] = React.useState<boolean>();
  const [Q2d, setQ2d] = React.useState<boolean>();
  const [Q3, setQ3] = React.useState<string>();
  const [Q4, setQ4] = React.useState<string>();
  const [Q5, setQ5] = React.useState<string>();
  const [Q6, setQ6] = React.useState<string>();

  React.useEffect(() => {
    const list = [];
    if (Q2a) list.push("Facebook");
    if (Q2b) list.push("LinkedIn");
    if (Q2c) list.push("Twitter");
    if (Q2d) list.push("Instagram");
    setQ2(list.join(", "));
  }, [Q2a, Q2b, Q2c, Q2d]);

  const [fillQuestionnaireMutation, { data, loading, error }] =
    useFillQuestionnaireMutation();

  const submitQuestionnaire = async (e: any) => {
    e.preventDefault();
    try {
      await fillQuestionnaireMutation({
        variables: {
          questionnaireInput: {
            college: college!,
            collegeaddress: collegeaddress!,
            city: city!,
            state: state!,
            Degree: Degree!,
            branch: branch!,
            year: year!,
            postaladdress: postaladdress!,
            pcity: pcity!,
            pstate: pstate!,
            pincode: pincode!,
            contactno: contactno!,
            whatsappno: whatsappno!,
            Q1: pastCAExperiennce ? Q1! : "NO",
            Q2: Q2!,
            Q3: Q3!,
            Q4: Q4!,
            Q5: Q5!,
            Q6: pastExperiennce ? Q6! : "NO",
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) {
    if (
      error.message.includes("duplicate key value violates unique constraint")
    )
      return <p>Questionnaire has been filled already</p>;
    return <p>Some Error Occurred</p>;
  }
  if (data) {
    if (data.fillQuestionnaire) {
      history.replace("/me");
    } else return <p>Some Error Occurred</p>;
  }

  return (
    <>
      <Header />
      <div className="Questionaire">
        <h1>QUESTIONAIRE</h1>
        <form onSubmit={submitQuestionnaire}>
          <div className="wrapper">
            <div className="left">
              <input
                required
                type="text"
                value={college}
                onChange={(e: any) => setCollege(e.target.value)}
                name="college"
                placeholder="COLLEGE NAME"
              />
              <input
                required
                type="text"
                value={collegeaddress}
                onChange={(e: any) => setCollegeaddress(e.target.value)}
                name="coll-add"
                placeholder="COLLEGE ADDRESS"
              />
              <input
                required
                type="text"
                value={city}
                onChange={(e: any) => setCity(e.target.value)}
                name="coll-city"
                placeholder="CITY"
              />
              <input
                required
                type="text"
                value={state}
                onChange={(e: any) => setState(e.target.value)}
                name="coll-state"
                placeholder="STATE"
              />
              <input
                required
                type="text"
                value={Degree}
                onChange={(e: any) => setDegree(e.target.value)}
                name="degree"
                placeholder="DEGREE"
              />
              <input
                required
                type="text"
                value={branch}
                onChange={(e: any) => setBranch(e.target.value)}
                name="branch"
                placeholder="BRANCH"
              />
              <input
                required
                type="text"
                value={year}
                onChange={(e: any) => setYear(e.target.value)}
                name="year"
                placeholder="YEAR"
              />
            </div>
            <div className="right">
              <textarea
                required
                value={postaladdress}
                onChange={(e: any) => setPostaladdress(e.target.value)}
                name="address"
                placeholder="POSTAL ADDRESS"
              ></textarea>
              <input
                required
                type="text"
                value={pcity}
                onChange={(e: any) => setPcity(e.target.value)}
                name="city"
                placeholder="CITY"
              />
              <input
                required
                type="text"
                value={pstate}
                onChange={(e: any) => setPstate(e.target.value)}
                name="state"
                placeholder="STATE"
              />
              <input
                required
                type="text"
                value={pincode}
                onChange={(e: any) => setPincode(e.target.value)}
                name="pincode"
                placeholder="PINCODE"
              />
              <input
                required
                type="text"
                value={contactno}
                onChange={(e: any) => setContactno(e.target.value)}
                name="con-num"
                placeholder="CONTACT NUMBER"
              />
              <input
                required
                type="text"
                value={whatsappno}
                onChange={(e: any) => setWhatsappno(e.target.value)}
                name="whatsapp-num"
                placeholder="WHATSAPP NUMBER"
              />
            </div>
          </div>
          <h3>OTHER GENERAL QUESTIONS</h3>
          <p>Were you a Shaastra CA previously ? </p>
          <div className="inputBox">
            <input
              required
              type="radio"
              name="previouslyCA"
              value="yes"
              onClick={() => setPastCAExperiennce(true)}
            />
            <label>YES</label>
            <input
              required
              type="radio"
              name="previouslyCA"
              value="no"
              onClick={() => setPastCAExperiennce(false)}
            />
            <label>NO</label>
          </div>
          <p
            style={{
              display: pastCAExperiennce ? "block" : "none",
            }}
          >
            If Your answer to the above question is yes, which year ?{" "}
          </p>
          <select
            required={pastCAExperiennce}
            name="previouslyCAyear"
            style={{
              display: pastCAExperiennce ? "block" : "none",
            }}
            onChange={(e: any) => setQ1(e.target.value)}
            value={Q1}
          >
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
            <input
              type="checkbox"
              name="socialHandles"
              id=""
              checked={Q2a}
              onChange={() => setQ2a(!Q2a)}
            />
            <label>Facebook</label>
            <input
              type="checkbox"
              name="socialHandles"
              id=""
              checked={Q2b}
              onChange={() => setQ2b(!Q2b)}
            />
            <label>LinkedIn</label>
            <input
              type="checkbox"
              name="socialHandles"
              id=""
              checked={Q2c}
              onChange={() => setQ2c(!Q2c)}
            />
            <label>Twitter</label>
            <input
              type="checkbox"
              name="socialHandles"
              id=""
              checked={Q2d}
              onChange={() => setQ2d(!Q2d)}
            />
            <label>Instagram</label>
          </div>
          {/* <input required type="text" placeholder="(Short answer type)" /> */}
          <p>Facebook Profile Link: </p>
          <input
            required
            type="url"
            placeholder="URL"
            onChange={(e: any) => setQ3(e.target.value)}
            value={Q3}
          />
          <p>Why do you wish to become a Campus Ambassador ? </p>
          <input
            required
            type="text"
            placeholder="(Short answer type)"
            onChange={(e: any) => setQ4(e.target.value)}
            value={Q4}
          />
          <p>
            Why do you think you are the right candidate for this position ?{" "}
          </p>
          <input
            required
            type="text"
            placeholder="(Short answer type)"
            onChange={(e: any) => setQ5(e.target.value)}
            value={Q5}
          />
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
            required={pastExperiennce}
            type="text"
            style={{
              display: pastExperiennce ? "block" : "none",
            }}
            placeholder="Describe the experience"
            value={Q6}
            onChange={(e: any) => setQ6(e.target.value)}
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
            <FaTimes />
          </button>
          <ul>
            <li>
              <FaHandPointRight />
              <p>
                The CA will be a part of the organizing team of Shaastra 2021
                and he/she must ensure that his/her college has no objection to
                this. Shaastra will not be responsible for any issues arising
                due to objection of college authorities in the later stage
              </p>
            </li>
            <li>
              <FaHandPointRight />
              <p>
                The internship certificate will only be provided subject to
                completion of fixed minimum points
              </p>
            </li>
            <li>
              <FaHandPointRight />
              <p>
                Shaastra reserves the right to change the points awarded for
                every task and minimum points required for the certificate as
                well as bonus incentives and goodies.
              </p>
            </li>
            <li>
              <FaHandPointRight />
              <p>
                Tasks allotted to CAs will include, but not be limited to:
                <ul>
                  <li>
                    <FaAngleRight />
                    Putting up posters
                  </li>
                  <li>
                    <FaAngleRight />
                    Sharing posts put up by the Shaastra Facebook page
                  </li>
                  <li>
                    <FaAngleRight />
                    Sending mails for publicity
                  </li>
                  <li>
                    <FaAngleRight />
                    Getting MoUs signed
                  </li>
                  <li>
                    <FaAngleRight />
                    Taking care of organizational aspects of events including
                    facilities and requirements
                  </li>
                  <li>
                    <FaAngleRight />
                    Visiting colleges or other public venues for carrying out
                    on-ground publicity
                  </li>
                  <li>
                    <FaAngleRight />
                    Getting participants through referrals
                  </li>
                </ul>
              </p>
            </li>
            <li>
              <FaHandPointRight />
              <p>
                All official communication will be done via the CA portal and
                email. It is the responsibility of the CA to check his/her email
                and the CA portal regularly and acknowledge the tasks assigned
                to him/her.
              </p>
            </li>
            <li>
              <FaHandPointRight />
              <p>
                Should there be any discrepancies or issues, the decision taken
                by Shaastra shall be final and binding
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Questionaire;
