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
                YOU ARE SELECTED AS A CA FOR SHAASTRA 2022. <a href="./"><span className='redt'>click here</span></a> to go to CA portal
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
                 <b>CONGRATULATIONS!!</b>
            </div>
            <div className='Style2t'>
                YOU ARE REJECTED AS A CA FOR SHAASTRA 2022. <a href="./"><span className='redt'>click here</span></a> to go to CA portal
            </div>
        </div>
        </div>
    )
}

export { Selected, Rejected }
