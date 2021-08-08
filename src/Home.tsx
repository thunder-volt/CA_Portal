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
          <button className='accordion' onClick={() => toggleShow1(!show1)}>
            lorem ipsum sit amte ?
            <span className='arrow'>
              <IoIosArrowForward />
            </span>
          </button>
          {show1 && (
            <div className='panel'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          )}
        </div>
        <div className='question'>
          <button className='accordion' onClick={() => toggleShow2(!show2)}>
            lorem ipsum sit amte ?
            <span className='arrow'>
              <IoIosArrowForward />
            </span>
          </button>
          {show2 && (
            <div className='panel'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          )}
        </div>
        <div className='question'>
          <button className='accordion' onClick={() => toggleShow3(!show3)}>
            lorem ipsum sit amte ?
            <span className='arrow'>
              <IoIosArrowForward />
            </span>
          </button>
          {show3 && (
            <div className='panel'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          )}
        </div>
        <div className='question'>
          <button className='accordion' onClick={() => toggleShow4(!show4)}>
            lorem ipsum sit amte ?
            <span className='arrow'>
              <IoIosArrowForward />
            </span>
          </button>
          {show4 && (
            <div className='panel'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          )}
        </div>
      </div>
      {/**Sponsor Section*/}
      <div className='sponsor'>
        <h1>Sponsors</h1>
        <div className='row'>
          <div className='column'>
            <img src={sponsor1} alt='Snow' />
          </div>
          <div className='column'>
            <img src={sponsor2} alt='Forest' />
          </div>
          <div className='column'>
            <img src={sponsor3} alt='Mountains' />
          </div>
          <div className='column'>
            <img src={sponsor4} alt='Mountains' />
          </div>
          <div className='column'>
            <img src={sponsor5} alt='Mountains' />
          </div>
        </div>
        <div className='row image-row'>
          <div className='column'>
            <img src={sponsor6} alt='Snow' />
          </div>
          <div className='column'>
            <img src={sponsor7} alt='Forest' />
          </div>
          <div className='column'>
            <img src={sponsor8} alt='Mountains' />
          </div>
          <div className='column'>
            <img src={sponsor9} alt='Mountains' />
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
            <form>
              <label>NAME</label>
              <input type='text' id='name' name='name'></input>
              <label>EMAIL</label>
              <input type='text' id='email' name='email'></input>
              <label>MESSAGE</label>
              <textarea id='message' name='message'></textarea>
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
