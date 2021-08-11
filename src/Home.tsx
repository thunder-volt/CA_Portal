import React from 'react'
import './Home.css'
import {
  FaPhoneAlt,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'
import {
  IoMdPin,
  IoMdMail,
  IoIosArrowForward,
  IoIosArrowDown,
} from 'react-icons/io'
import sponsor1 from './assests/drdo.png'
import sponsor2 from './assests/accessible_india.png'
import sponsor3 from './assests/star_sports.png'
import sponsor4 from './assests/indian_armed_forces.png'
import sponsor5 from './assests/tata4.png'
import sponsor6 from './assests/shell.png'
import sponsor7 from './assests/GSC_logo.png'
import sponsor8 from './assests/acumen_logo.png'
import sponsor9 from './assests/ceew_logo.jpg'

function Home() {
  const [show1, toggleShow1] = React.useState(false)
  const [show2, toggleShow2] = React.useState(false)
  const [show3, toggleShow3] = React.useState(false)
  const [show4, toggleShow4] = React.useState(false)

  return (
    <div className='home'>
      {/**FAQ Section*/}
      <div className='faq'>
        <h1>Frequently Asked Questions</h1>
        <div className='question'>
          <div className='accordion' onClick={() => toggleShow1(!show1)}>
            lorem ipsum sit amte ?
            {show1 ? (
              <span className='down-arrow'>
                <IoIosArrowDown />
              </span>
            ) : (
              <span className='arrow'>
                <IoIosArrowForward />
              </span>
            )}
            {show1 && (
              <span className='panel'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </span>
            )}
          </div>
        </div>
        <div className='question'>
          <div className='accordion' onClick={() => toggleShow2(!show2)}>
            lorem ipsum sit amte ?
            {show2 ? (
              <span className='down-arrow'>
                <IoIosArrowDown />
              </span>
            ) : (
              <span className='arrow'>
                <IoIosArrowForward />
              </span>
            )}
            {show2 && (
              <span className='panel'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </span>
            )}
          </div>
        </div>
        <div className='question'>
          <div className='accordion' onClick={() => toggleShow3(!show3)}>
            lorem ipsum sit amte ?
            {show3 ? (
              <span className='down-arrow'>
                <IoIosArrowDown />
              </span>
            ) : (
              <span className='arrow'>
                <IoIosArrowForward />
              </span>
            )}
            {show3 && (
              <span className='panel'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </span>
            )}
          </div>
        </div>
        <div className='question'>
          <div className='accordion' onClick={() => toggleShow4(!show4)}>
            lorem ipsum sit amte ?
            {show4 ? (
              <span className='down-arrow'>
                <IoIosArrowDown />
              </span>
            ) : (
              <span className='arrow'>
                <IoIosArrowForward />
              </span>
            )}
            {show4 && (
              <span className='panel'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </span>
            )}
          </div>
        </div>
      </div>
      {/**Sponsor Section*/}
      <div className='sponsor'>
        <h1>Sponsors</h1>
        <div className='image-row'>
          <div className='image-column'>
            <img src={sponsor1} alt='' />
          </div>
          <div className='image-column'>
            <img src={sponsor2} alt='' />
          </div>
          <div className='image-column'>
            <img src={sponsor3} alt='' />
          </div>
          <div className='image-column'>
            <img src={sponsor4} alt='' />
          </div>
          <div className='image-column'>
            <img src={sponsor5} alt='' />
          </div>
        </div>
        <div className='sec-image-row'>
          <div className='sec-image-column'>
            <img src={sponsor6} alt='' />
          </div>
          <div className='sec-image-column'>
            <img src={sponsor4} alt='' />
          </div>
          <div className='sec-image-column'>
            <img src={sponsor8} alt='' />
          </div>
          <div className='sec-image-column'>
            <img src={sponsor9} alt='' />
          </div>
          <div className='sec-image-column'>
            <img src={sponsor2} alt='' />
          </div>
        </div>
      </div>
      {/**Contact Section*/}
      <div className='contact'>
        <div>
          <h1>Contact Us</h1>
        </div>
        <div className='row'>
          <div className='column'>
            <form className='contact-forn'>
              <div className='contact-input'>
                <label>NAME</label>
                <input type='text' id='name' name='name'></input>
              </div>
              <div className='contact-input'>
                <label>EMAIL</label>
                <input type='text' id='email' name='email'></input>
              </div>
              <div className='contact-input'>
                <label>MESSAGE</label>
                <input id='message' name='message'></input>
              </div>
              <button className='message-btn'>Message</button>
            </form>
          </div>
          <div className='column'>
            <h3>Contact Information</h3>
            <div className='contact-info'>
              <div className='contact-ctn'>
                <IoMdPin className='contact-btn' />
                <p>Address</p>
              </div>
              <div className='contact-ctn'>
                <FaPhoneAlt className='contact-btn' />
                <p>Phone number</p>
              </div>
              <div className='contact-ctn'>
                <IoMdMail className='contact-btn' />
                <p>Mail Id</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**Footer Section*/}
      <div className='footer'>
        <div className='row'>
          <div className='column'>
            <div className='footer-info'>
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>Get In touch with us using any of the platforms</p>
            </div>
          </div>
          <div className='column'>
            <div className='social-btn'>
              <FaFacebookSquare className='btn' />
              <FaTwitterSquare className='btn' />
              <FaInstagram className='btn' />
              <FaLinkedin className='btn' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
