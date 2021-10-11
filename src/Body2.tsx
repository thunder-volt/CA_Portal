import React from 'react';
import "./Body1.css"
import Header from "./Header";
import Particles from 'react-tsparticles';

const Selected = () => {
    return (
        <>

      <Header />
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
            speed: 2,
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
            <div className='Style2t'>You are Selected as a CA For Shaastra 2022. We cordially welcome you to the team behind India’s largest completely
student-run technical extravaganza - Shaastra 2022.
With a strong team of 500 Students of IIT Madras and Hundreds of Campus
Ambassadors across India, Shaastra 2022 aims to give the Best Technical
Experience to everyone in the country ranging from School students To Engineers
of the future. With this in mind, we hope you have an Amazing Journey working
with us as you represent your college.<a href="./"><span className='redt'>CLICK HERE</span></a> TO GO TO THE CA PORTAL.
            </div>
        </div>
        </div>
        </>
    )
}

const Rejected = () => {
    return (

        <>

        <Header />
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
            speed: 2,
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
            <div className='Style2t1'>
            We regret to inform that your application for being a Shaastra Campus Ambassador couldn't be accomodated. Nevertheless, don't lose hope because you can still try again next year which will undoubtedly see a bigger CA Program. Get a feel of Shaastra by experiencing the largest student-run technical extravaganza. With a host of workshops,international competitions,lectures,exhibitions and shows, shaastra is bound to amaze you. <a href="./"><span className='redt'>CLICK HERE</span></a> TO GO TO THE CA PORTAL.
            </div>
        </div>
        </div>
        </>
    )
}

export { Selected, Rejected }
