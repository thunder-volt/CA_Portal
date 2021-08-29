import React from 'react'
import './Profile.css';
// import Pic from "./img/Picture3.png";
// import Pic2 from "./img/Picture2.png";

const Profile = () => {
    return (
        <div className='bodyp'>
            <div className='Part1p'> 
            <div className='P1L'>
                <div className='Cardp'>
                <img className='Top' src={'/assets/Picture3.png'} alt="Pic"  height='180' width='180' />
                <img className='End' src={'/assets/Picture2.png'} alt="Pic2"  height='180' width='180' />
                </div>
                <div> <b className='Style1p'>FULL NAME</b> </div>
                <div>EMAIL@GMAIL.COM</div>
                <div>INDIAN INSTITUTE OF TECNOLOGY</div>
                <div>MADRAS</div>
                <div>CA-REFERRAL CODE</div>
            </div>

            <div className='P1R'>
                <img src={'/assets/Picture3.png'} alt="Pic"  height='250' width='800'/>
                <div> <span>POSITION  :  </span> someposition</div>
                <div>TOTAL POINTS EARNED : 30</div>
            </div>

            </div>
            <div className='Part2p'>
            <div className='PStyle2p'> TASK PENDING </div>
            <div className='PStyle3p'>
                 <p>TASK TITLE</p> <p>POINTS : 10</p> </div>
             <div className='PStyle3p'>
                 <p>TASK TITLE</p> <p>POINTS : 5</p> </div>
             <div className='PStyle3p'>
                 <p>TASK TITLE</p> <p>POINTS : 15</p> </div> 
             <div className='PStyle4p'>SEE MORE</div>
                    
            </div>
            <div className='Part3p'>
            <div className='PStyle2p'> TASK COMPLETED </div>
            <div className='PStyle3p'>
                 <p>TASK TITLE</p> <p>POINTS : 10</p> </div>
             <div className='PStyle3p'>
                 <p>TASK TITLE</p> <p>POINTS : 5</p> </div>
             <div className='PStyle3p'>
                 <p>TASK TITLE</p> <p>POINTS : 15</p> </div> 
                 <div className='PStyle4p'>SEE MORE</div>

            </div>
            
        </div>
    )
}

export default Profile