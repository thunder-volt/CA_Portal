import React from 'react';
import "./Body1.css"
import Particles from 'react-tsparticles';

const Selected = () => {
    return (
        <div>
            <Particles
        className='particles'
        style={{
           
            position: "fixed",
          width: "100%",
          height: "100vh",
          zIndex:-1,
          top:0,
          left:0
        }}
      id="tsparticles"
      options={{ 
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#f30a0a",
          },
          links: {
            color: "#006dff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true, }}
        />  

       
        
        <div className="Bodyt" >
            <div className='Body_Item2t'>
                 <b>CONGRATULATIONS!!</b>
            </div>
            <div className='Style2t'>
                YOU ARE SELECTED AS A CA FOR SHAASTRA 2022.WE CORDIALLY WELCOME YOU TO THE TEAM BEHIND INDIA’S LARGEST COMPLETELY
STUDENT-RUN TECHNICAL EXTRAVAGANZA - SHAASTRA 2022.
WITH A STRONG TEAM OF 500 STUDENTS OF IIT MADRAS AND HUNDREDS OF CAMPUS
AMBASSADORS ACROSS INDIA, SHAASTRA 2022 AIMS TO GIVE THE BEST TECHNICAL
EXPERIENCE TO EVERYONE IN THE COUNTRY RANGING FROM SCHOOL STUDENTS TO ENGINEERS
OF THE FUTURE. WITH THIS IN MIND, WE HOPE YOU HAVE AN AMAZING JOURNEY WORKING
WITH US AS YOU REPRESENT YOUR COLLEGE. <a href="./"><span className='redt'>CLICK HERE</span></a> TO GO TO THE CA PORTAL.
            </div>
        </div>
        </div>
    )
}

const Rejected = () => {
    return (
        <div>

      
        
        <Particles
        className='particles'
        style={{
           
            position: "fixed",
          width: "100%",
          height: "100vh",
          zIndex:-1,
          top:0,
          left:0
        }}
      id="tsparticles"
      options={{ 
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#f30a0a",
          },
          links: {
            color: "#006dff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true, }}
        />  
        <div className="Bodyt" >
            <div className='Body_Item2t'>
                 <b>SORRY!!</b>
            </div>
            <div className='Style2t'>
               WE REGRET TO INFORM THAT YOUR APPLICATION FOR BEING A SHAASTRA CAMPUS AMBASSADOR COULDN'T BE ACCOMODATED. NEVERTHELESS, DON'T LOSE HOPE BECAUSE YOU CAN STILL TRY AGAIN NEXT YEAR WHICH WILL UNDOUBTEDLY SEE A BIGGER CA PROGRAM. GET A FEEL OF SHAASTRA BY EXPERIENCING THE LARGEST STUDENT-RUN TECHNICAL EXTRAVAGANZA. WITH A HOST OF WORKSHOPS,INTERNATIONAL COMPETITIONS,LECTURES,EXHIBITIONS AND SHOWS, SHAASTRA IS BOUND TO AMAZE YOU. <a href="./"><span className='redt'>CLICK HERE</span></a> TO GO TO THE CA PORTAL.
            </div>
        </div>
        </div>
    )
}

export { Selected, Rejected }
