import React from "react";
import Header from "./Header";
import "./Home.css";
import {
  FaPhoneAlt,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
  FaMarker,
  FaMapMarked,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import {
  IoMdPin,
  IoMdMail,
  IoIosArrowForward,
  IoIosArrowDown,
} from "react-icons/io";
import sponsor1 from "./assets/drdo.png";
import sponsor2 from "./assets/accessible_india.png";
import sponsor3 from "./assets/star_sports.png";
import sponsor4 from "./assets/indian_armed_forces.png";
import sponsor5 from "./assets/tata4.png";
import sponsor6 from "./assets/shell.png";
import sponsor7 from "./assets/GSC_logo.png";
import sponsor8 from "./assets/acumen_logo.png";
import sponsor9 from "./assets/ceew_logo.jpg";

// import illustration1 from "./assets/illustration1.png";
// import illustration2 from "./assets/illustration2.png";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [faqs, setFaqs] = React.useState([
    {
      no: 0,
      question: "lorem ipsum sit amte ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      no: 1,
      question: "lorem ipsum sit amte ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      no: 2,
      question: "lorem ipsum sit amte ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      no: 3,
      question: "lorem ipsum sit amte ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]);
  const [show, toggleShow] = React.useState([false, false, false, false]);

  return (
    <>
      <Header />
      {/* <div className="Home_landing">
          <div className="imgBox">
            <img src={illustration1} alt="" />
          </div>
          <div className="contentBox">
            <h1>JOIN THE FAMILY</h1>
            <h3>STUDENT AMBASSADOR</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <Link to="/Login">REGISTER</Link>
          </div>
        </div>
        <div className="Home_roles">
          <h2>Role of a Student Ambassador</h2>
          <div className="contentBox">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              imperdiet nam diam hac vehicula massa fames diam tortor. Nam nunc
              fringilla viverra sit diam aliquam. Integer varius porttitor pretium
              a. Quis a cras at lorem libero dolor eu rhoncus. Purus sit arcu, in
              eget tortor ut tellus. Nam nunc fringilla viverra sit diam aliquam.
              Integer varius porttitor pretium a.
            </p>
          </div>
          <div className="imgBox">
            <img src={illustration2} alt="" />
          </div>
        </div>
        <div className="Home_responsiblities">
          <h2>Responsiblities and specific duties</h2>
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
            </li>
            <li>
              <FontAwesomeIcon icon={faHandPointRight} />
              All official communication will be done via the CA portal and email.
              It is the responsibility of the CA to check his/her email and the CA
              portal regularly and acknowledge the tasks assigned to him/her.
            </li>
            <li>
              <FontAwesomeIcon icon={faHandPointRight} />
              Should there be any discrepancies or issues, the decision taken by
              Shaastra shall be final and binding
            </li>
          </ul>
        </div> */}
      {/**FAQ Section*/}
      <div className="faq">
        <h1>Frequently Asked Questions</h1>
        {faqs.map((faq) => {
          return (
            <div
              style={
                show[faq.no]
                  ? {
                      height: "fit-content",
                    }
                  : {
                      height: "60px",
                    }
              }
              className="question"
              onClick={() => {
                let index = 0;
                toggleShow(
                  show.map((s) => {
                    if (faq.no == index++) {
                      return !show[faq.no];
                    } else return s;
                  })
                );
              }}
            >
              <span className="top">
                <h3>{faq.question}</h3>
                <span
                  style={
                    show[faq.no]
                      ? {
                          transform: "rotate(-90deg)",
                          transition: "0.5s",
                        }
                      : {
                          transform: "rotate(0deg)",
                          transition: "0.5s",
                        }
                  }
                  className="down-arrow"
                >
                  <IoIosArrowDown />
                </span>
              </span>
              <span className="panel">
                <p>{faq.answer}</p>
              </span>
            </div>
          );
        })}
      </div>
      {/**Sponsor Section*/}
      <div className="sponsor">
        <h1>Sponsors</h1>
        <div className="imgContainer">
          <img src={sponsor1} alt="" />
          <img src={sponsor2} alt="" />
          <img src={sponsor3} alt="" />
          <img src={sponsor5} alt="" />
          <img src={sponsor6} alt="" />
          <img src={sponsor4} alt="" />
          <img src={sponsor7} alt="" />
          <img src={sponsor8} alt="" />
          <img src={sponsor9} alt="" />
        </div>
      </div>
      {/**Contact Section*/}
      <div className="contact">
        <div>
          <h1>Contact Us</h1>
        </div>
        <div className="row">
          <div className="column">
            <form className="contact-form">
              <div className="contact-input">
                <label>NAME</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="contact-input">
                <label>EMAIL</label>
                <input type="text" id="email" name="email" />
              </div>
              <div className="contact-input">
                <label>MESSAGE</label>
                <textarea id="message" name="message" rows={4} />
              </div>
              <button className="message-btn">Message</button>
            </form>
          </div>
          <div className="column">
            <h3>Contact Information</h3>
            <div className="contact-info">
              <div className="contact-ctn">
                <FaMapMarkerAlt className="contact-btn" />
                <p>Address</p>
              </div>
              <div className="contact-ctn">
                <FaPhoneAlt className="contact-btn" />
                <p>Phone number</p>
              </div>
              <div className="contact-ctn">
                <FaEnvelope className="contact-btn" />
                <p>Mail Id</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**Footer Section*/}
      <div className="footer">
        <div className="row">
          <div className="column">
            <div className="footer-info">
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>Get In touch with us using any of the platforms</p>
            </div>
          </div>
          <div className="column">
            <div className="social-btn">
              <a href="#">
                <FaFacebookSquare className="btn" />
              </a>
              <a href="#">
                <FaTwitterSquare className="btn" />
              </a>
              <a href="#">
                <FaInstagram className="btn" />
              </a>
              <a href="#">
                <FaLinkedin className="btn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
