import React, { useContext } from "react";
import Header from "./Header";
import "./Home.css";
import {
  FaPhoneAlt,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaHandPointRight,
  FaChevronLeft,
  FaChevronRight,
  FaYoutube,
  FaYoutubeSquare,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import sponsor1 from "./assets/edufabrica.png";

import illustration1 from "./assets/illustration1.svg";
import illustration2 from "./assets/illustration2.svg";
import { Link } from "react-router-dom";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import AuthContext from "./utils/context";
import { useSendSupportMailMutation } from "./generated";
SwiperCore.use([Navigation]);

function Home() {
  const [faqs, setFaqs] = React.useState([
    {
      no: 0,
      question: "What is the CA program / who is a Campus Ambassador ?",
      answer:
        "The Campus Ambassador will be the representative of Shaastra, IIT Madras in their resycampus and will help in publicising events and workshops conducted by Shaastra. This will be similar to a digital marketing internship",
    },
    {
      no: 1,
      question: "How / where should I apply ?",
      answer:
        "You can apply for the program using the sign up button you can see in this page. During your sign up answer all the questions asked to you and within a couple of days you will be interviewed by one of our team member. You will be selected based on your answers you give during sign up and you interview. Also remember the login credentials you provide during sign up as you will not be allowed to change the email id.",
    },
    {
      no: 2,
      question: "How are the top CAs decided ?",
      answer:
        "The top CAs will be decided based on a points system designed to evaluate the performance of CAs in a fair manner. The points system will be shared with you shortly after you get selected.",
    },
    {
      no: 3,
      question:
        "What to do if you haven't been contacted by anyone from our team regarding interview ?",
      answer:
        "Send a mail to outreach@shaastra.org stating the above problem. You will receive a reply as soon as possible.",
    },
    {
      no: 4,
      question: "What is the eligibility / criteria to become a CA ?",
      answer:
        "If you are a student pursuing either B.tech. or B.E. and if you have a valid college ID you can apply for this program.",
    },
    {
      no: 5,
      question: "How much time or effort from my part would be required ?",
      answer:
        "Not more than 2 hours per week would be required from a Campus Ambassador.",
    },
  ]);
  const [show, toggleShow] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const { role } = useContext(AuthContext);
  const [contactName, setContactName] = React.useState("");
  const [contactEmail, setContactEmail] = React.useState("");
  const [contactMessage, setContactMessage] = React.useState("");
  const [sendSupportMailMutation, { error }] = useSendSupportMailMutation({
    onCompleted() {
      window.alert("Shaastra Outreach Team will contact you shortly!");
    },
  });

  if (error) alert("Message was not successfully received, please retry");

  const handleContactSubmit = async (e: any) => {
    e.preventDefault();
    if (
      contactName.length != 0 &&
      contactEmail.length != 0 &&
      contactMessage.length != 0
    ) {
      try {
        await sendSupportMailMutation({
          variables: {
            sendSupportMailInput: {
              name: contactName,
              email: contactEmail,
              content: contactMessage,
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
      setContactName("");
      setContactEmail("");
      setContactMessage("");
    } else {
      alert("Fill All fields!!");
      return false;
    }
  };
  return (
    <>
      <Header />
      <div className="Home_landing">
        <div className="imgBox">
          <img src={illustration1} alt="" />
        </div>
        <div className="contentBox">
          <h1>JOIN THE FAMILY</h1>
          <h3>CAMPUS AMBASSADOR</h3>
          <p>
          Want to be the face of Shaastra in your campus?
          </p>
          {(role === null || role === "") && <Link to="/login">REGISTER</Link>}
        </div>
      </div>
      <div className="Home_roles">
        <div className="contentBox">
          <h1>The Campus Ambassador program</h1>
          <p>
            The Campus Ambassador program is a national level marketing
            internship cum networking program of the tech savvy people. We aim
            to hone and nurture the marketing and leadership skills of the
            student community through this Campus Ambassador program. The Campus
            Ambassadors of Shaastra will be the face of Shaastra in their campus
            and they will be helpful to bridge the gap between Shaastra and
            their college.
          </p>
        </div>
        <div className="imgBox">
          <img src={illustration2} alt="" />
        </div>
      </div>
      <div className="Home_responsiblities">
        <h1>Responsiblities and specific duties</h1>
        <ul>
          <li>
            <FaHandPointRight />
            <p>
              One of the primary responsibilities of a campus ambassador will be
              to SHARE and LIKE the social media posts of Shaastra.
            </p>
          </li>
          <li>
            <FaHandPointRight />
            <p>Conduct E-MAIL CAMPAIGNS in your respective colleges.</p>
          </li>
          <li>
            <FaHandPointRight />
            <p>
              Find innovative and effective social media strategies to help
              Shaastra find the required targeted audience.
            </p>
          </li>
          <li>
            <FaHandPointRight />
            <p>
              Responsible for publicizing SAMPARK - a pan India event conducted
              by Shaastra for colleges across the country and getting news
              articles for the same.
            </p>
          </li>
          <li>
            <FaHandPointRight />
            <p>You will be THE FACE OF SHAASTRA in your campus.</p>
          </li>
          <li>
            <FaHandPointRight />
            <p>
              Heading your campus as the CONTINGENT HEAD at Shaastra Grand
              Championship which will take place during Shaastra.
            </p>
          </li>
          <li>
            <FaHandPointRight />
            <p>
              Complete certain tasks to OBTAIN POINTS and compete with other
              CA’s to be eligible for the REWARDS of the Campus Ambassador
              program.
            </p>
          </li>
          <li>
            <FaHandPointRight />
            <p>
              Develop campus-specific marketing and outreach programs/
              campaigns.
            </p>
          </li>
        </ul>
      </div>
      <div className="Home_whyJoinUS">
        <h1>Why become a Campus Ambassador (CA)?</h1>
        <ul>
          <li>
            <FaHandPointRight />
            <p>SPONSORED INTERNSHIPS for the top 30 CAs.</p>
          </li>
          <li>
            <FaHandPointRight />
            <p>A chance to showcase your MANAGEMENT SKILLS.</p>
          </li>
          <li>
            <FaHandPointRight />
            <p>Build a strong network among your peers.</p>
          </li>
          <li>
            <FaHandPointRight />
            <p>Upskill WORKSHOPS exclusive for CAs.</p>
          </li>
          <li>
            <FaHandPointRight />
            <p>Shaastra merchandise and exiting goodies for the CAs.</p>
          </li>
          <li>
            <FaHandPointRight />
            <p>
              Event and Task-specific rewards such as coupons, vouchers and
              goodies.
            </p>
          </li>
          <li>
            <FaHandPointRight />
            <p>
              SHAASTRA CREDITS for top-performing CAs in Shaastra Grand
              Championship.
            </p>
          </li>
          <li>
            <FaHandPointRight />
            <p>
              Marketing INTERNSHIP CERTIFICATES to CAs crossing a certain
              threshold points.
            </p>
          </li>
          <li>
            <FaHandPointRight />
            <p>
              Develop expertise in areas like team management, event
              organization, public speaking, social media, content writing and
              promotion, and various other technical skills.
            </p>
          </li>
        </ul>
      </div>
      {/*<div className='Home_prizes'>
        <h1>Prizes</h1>
        <ul>
          <li>
            <FaHandPointRight />
            <p>Sponsored Internships for the top 30CAs.</p>
          </li>
          <li>
            <FaHandPointRight />{' '}
            <p>A Chance to showcase your Management Skills.</p>
          </li>
          <li>
            <FaHandPointRight /> <p>Build a strong network among your peers.</p>
          </li>
          <li>
            <FaHandPointRight /> <p>Upskill workshops exclusive for CAs.</p>
          </li>
          <li>
            <FaHandPointRight />{' '}
            <p>Shaastra Merchandise and exciting goodies for the CAs.</p>
          </li>
          <li>
            <FaHandPointRight />{' '}
            <p>
              Event and Task-specific rewards such as coupons, vouchers and
              goodies.
            </p>
          </li>
          <li>
            <FaHandPointRight />{' '}
            <p>
              Shaastra credits for top-performing CAs in Shaastra Grand
              Championship.
            </p>
          </li>
          <li>
            <FaHandPointRight />{' '}
            <p>
              Marketing internship certificates to CAs crossing a certain
              threshold points.
            </p>
          </li>
          <li>
            <FaHandPointRight />{' '}
            <p>
              Develop expertise in areas like team management, event
              organization, public speaking, social media, content writing and
              promotion, and various other technical skills
            </p>
          </li>
          <li>
            <FaHandPointRight />
            <p>Special Feast for those CA’s who attend Shaastra.</p>
          </li>
        </ul>
  </div> */}
      <div className="Home_testimonials">
        <h1>Testimonials</h1>
        <div className="cardBox">
          <div className="card">
            <p>
              {/* I was the top performer at the CA program of Shaastra, IIT Madras.
              I got lots of incentives from Shaastra which includes my
              completion certificates, Merchandise of Shaastra, Microsoft, and
              Foxmula company. Being the top rank holder in Shaastra CA program,
              The Foxmula company gave me a splendid internship opportunity.  */}
              My experience with Shaastra was very good. The way this
              organization conducted those events was praiseworthy and
              meritorious. I love the work environment, interaction, conduction,
              and execution of everything. I would love to give my thanks to the
              team for the consideration, recognition, appreciation, and
              felicitation for honoring me as the top CA at Shaastra.
            </p>
            <span>- FIZA RAHMANI</span>
          </div>
          <div className="card">
            <p>
              Shaastra is one of the best technical events I have promoted, and
              it has helped me in improving my communication skills and also
              increased my network. I would say it is one of the systematically
              organized technical events in India. And I am glad that I was a
              part of this event.
            </p>
            <span>- Suraj</span>
          </div>
          <div className="card">
            <p>
              As a CA, I had great exposure in representing Shaastra in my
              campus and publicizing various workshops and tech events hosted by
              them.The program had ample of opportunities to learn on the go,
              starting from student engagement to strategizing effective social
              media campaigns. The outreach team too was extremely welcoming and
              responsive, It's been a pleasure working with Shaastra!
            </p>
            <span>- Besmah Gani Ansary</span>
          </div>
        </div>
      </div>
      <div className="faq">
        <h1>Frequently Asked Questions</h1>
        {faqs.map((faq) => {
          return (
            <div
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
              <span
                style={
                  show[faq.no]
                    ? {
                        height: "max-content",
                        paddingTop: "15px",
                      }
                    : {
                        height: "0px",
                        paddingTop: "0px",
                      }
                }
                className="panel"
              >
                <p>{faq.answer}</p>
              </span>
            </div>
          );
        })}
      </div>
      {/* <div className="sponsor">
        <div className="imgContainer">
          <h1>Sponsors</h1>
          <p>
            Edufabrica is an emerging training company that offers Official
            Microsoft certified training in India across Delhi and all over
            India in the most demanding technological courses and focusing on
            providing effective and comprehensive Career Guidance workshops in
            India. It offers wide range of technical training in advanced and
            basic levels with brand certifications from HP, Microsoft and
            EC-Council and over the past year it has become synonym for quality
            Microsoft and HP certified training in India. It has variant
            programs that run year around. Its services ranges from providing
            Best Technical Workshop in India to short duration trainings such as
            winter training and summer training
          </p>
        </div>
        <img src={sponsor1} alt="" />
      </div> */}
      <div className="contact">
        <div>
          <h1>Contact Us</h1>
        </div>
        <div className="row">
          <div className="column">
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="contact-input">
                <label>NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                />
              </div>
              <div className="contact-input">
                <label>EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
              <div className="contact-input">
                <label>MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                />
              </div>
              <button type="submit" className="message-btn">
                Message
              </button>
            </form>
          </div>
          <div className="column">
            <h3>Contact Information</h3>
            <div className="contact-info">
              <div className="contact-ctn">
                <FaPhoneAlt className="contact-btn" />
                <p>Mohan Kumar - +919952729095</p>
              </div>
              <div className="contact-ctn">
                <FaPhoneAlt className="contact-btn" />
                <p>Shvetha Sivaprasad - +916379764273</p>
              </div>
              <div className="contact-ctn">
                <FaPhoneAlt className="contact-btn" />
                <p>Madhan Kumar - +916303564574</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="row">
          <div className="column">
            <div className="footer-info">
              <h3>You must be the change you wish to see in the world</h3>
              <p>Get In touch with us using any of the platforms</p>
            </div>
          </div>
          <div className="column">
            <div className="social-btn">
              <a target="_blank" href="https://www.facebook.com/Shaastra/">
                <FaFacebookSquare className="btn" />
              </a>
              <a target="_blank" href="https://www.youtube.com/c/iitmshaastra">
                <FaYoutubeSquare className="btn" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/shaastra_iitm/?_se=c2h2ZXRoYUBzaGFhc3RyYS5vcmc%3D"
              >
                <FaInstagram className="btn" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/shaastra-iit-madras/"
              >
                <FaLinkedin className="btn" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="sec-row">Shaastra 2021 © All Rights Reserved</p>
          <p className="sec-row">DESIGNED BY SHAASTRA WEBOPS 2022</p>
        </div>
      </div>
    </>
  );
}

export default Home;
