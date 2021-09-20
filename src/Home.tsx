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
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import sponsor1 from "./assets/drdo.png";
import sponsor2 from "./assets/accessible_india.png";
import sponsor3 from "./assets/star_sports.png";
import sponsor4 from "./assets/indian_armed_forces.png";
import sponsor5 from "./assets/tata4.png";
import sponsor6 from "./assets/shell.png";
import sponsor7 from "./assets/GSC_logo.png";
import sponsor8 from "./assets/acumen_logo.png";
import sponsor9 from "./assets/ceew_logo.jpg";

import illustration1 from "./assets/illustration1.svg";
import illustration2 from "./assets/illustration2.svg";
import { Link } from "react-router-dom";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import AuthContext from "./utils/context";
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
  return (
    <>
      <Header />
      <div className="Home_landing">
        <div className="imgBox">
          <img src={illustration1} alt="" />
        </div>
        <div className="contentBox">
          <h1>JOIN THE FAMILY</h1>
          <h3>STUDENT AMBASSADOR</h3>
          <p>Lorem ipsum dolor sit amet</p>
          {(role === null || role === "") && <Link to="/Login">REGISTER</Link>}
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
              CAs will be responsible for promoting events conducted by Shaastra
              and ensuring maximum participation from their college in Shaastra
              2021.
            </p>
          </li>
          <li>
            <FaHandPointRight />
            <p>CAs will be the representative of Shaastra, IIT Madras.</p>
          </li>
          <li>
            <FaHandPointRight />
            <p>
              CAs will be responsible for conducting workshops conducted by
              Shaastra in their campus.
            </p>
          </li>
          <li>
            <FaHandPointRight />
            <p>
              Apart from the above mentioned points they should share the social
              media pages of Shaastra.
            </p>
          </li>
        </ul>
      </div>
      <div className="Home_whyJoinUS">
        <h1>Why become a Campus Ambassador (CA)?</h1>
        <ul>
          <li>
            <FaHandPointRight />
            Medals for the top three CA’s
          </li>
          <li>
            <FaHandPointRight />
            Internships for the Top 20 CA’s
          </li>
          <li>
            <FaHandPointRight />
            Free workshops for the top 50 CA’s
          </li>
          <li>
            <FaHandPointRight />
            Merch and coupons for the CA’s who are placed in 51-100
          </li>
          <li>
            <FaHandPointRight />
            Certificates for the CA’s who have sufficient points in the CA
            program
          </li>
          <li>
            <FaHandPointRight />
            Task specific rewards for those who get very high points in the form
            of vouchers.(Can be done for the tasks after CA program result is
            announced)
          </li>
          <li>
            <FaHandPointRight />
            Endorsement in LinkedIn for those who are still active till the end
          </li>
          <li>
            <FaHandPointRight />
            Recommendation letter from Shaastra for highly enthu CA’s.
          </li>
          <li>
            <FaHandPointRight />
            Free trip to some location.
          </li>
          <li>
            <FaHandPointRight />
            Special Feast for those CA’s who attend Shaastra.
          </li>
        </ul>
      </div>
      <div className="Home_prizes">
        <h1>Prizes</h1>
        <div className="cardBox">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
      <div className="Home_testimonials">
        <h1>Testimonials</h1>

        <div className="slider_box">
          <div className="swiper_prev" ref={navigationPrevRef}>
            <FaChevronLeft />
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            centeredSlides={window.innerWidth <= 600 ? true : false}
            loop={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.nextEl = navigationNextRef.current;
              // @ts-ignore
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.navigation.update();
            }}
          >
            <SwiperSlide>
              <div className="card">
                <p>
                  As a Campus Ambassador for SHAASTRA 2020, I was able to
                  develop my level of confidence as well as my leadership
                  quality. I am happy that I got a chance to make the fellow
                  students in my region enjoy the technical treat. I was able to
                  learn how to work as a team, manage them and how to overcome
                  the difficulties in most of the situations.
                </p>
                <span>
                  - Ajitu Kumar Best CA,
                  <br /> Shaastra 2020
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <p>
                  As a Campus Ambassador for SHAASTRA 2020, I was able to
                  develop my level of confidence as well as my leadership
                  quality. I am happy that I got a chance to make the fellow
                  students in my region enjoy the technical treat. I was able to
                  learn how to work as a team, manage them and how to overcome
                  the difficulties in most of the situations.
                </p>
                <span>
                  - Ajitu Kumar Best CA,
                  <br /> Shaastra 2020
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <p>
                  As a Campus Ambassador for SHAASTRA 2020, I was able to
                  develop my level of confidence as well as my leadership
                  quality. I am happy that I got a chance to make the fellow
                  students in my region enjoy the technical treat. I was able to
                  learn how to work as a team, manage them and how to overcome
                  the difficulties in most of the situations.
                </p>
                <span>
                  - Ajitu Kumar Best CA,
                  <br /> Shaastra 2020
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <p>
                  As a Campus Ambassador for SHAASTRA 2020, I was able to
                  develop my level of confidence as well as my leadership
                  quality. I am happy that I got a chance to make the fellow
                  students in my region enjoy the technical treat. I was able to
                  learn how to work as a team, manage them and how to overcome
                  the difficulties in most of the situations.
                </p>
                <span>
                  - Ajitu Kumar Best CA,
                  <br /> Shaastra 2020
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <p>
                  As a Campus Ambassador for SHAASTRA 2020, I was able to
                  develop my level of confidence as well as my leadership
                  quality. I am happy that I got a chance to make the fellow
                  students in my region enjoy the technical treat. I was able to
                  learn how to work as a team, manage them and how to overcome
                  the difficulties in most of the situations.
                </p>
                <span>
                  - Ajitu Kumar Best CA,
                  <br /> Shaastra 2020
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <p>
                  As a Campus Ambassador for SHAASTRA 2020, I was able to
                  develop my level of confidence as well as my leadership
                  quality. I am happy that I got a chance to make the fellow
                  students in my region enjoy the technical treat. I was able to
                  learn how to work as a team, manage them and how to overcome
                  the difficulties in most of the situations.
                </p>
                <span>
                  - Ajitu Kumar Best CA,
                  <br /> Shaastra 2020
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper_next" ref={navigationNextRef}>
            <FaChevronRight />
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
                        height: "fit-content",
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
