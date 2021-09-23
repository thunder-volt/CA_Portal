import React from "react";
import "./Body1.css";
import { useGetQuestionnaireQuery } from "./generated";
import Particles from 'react-tsparticles';
const Body1 = () => {
  const { data } = useGetQuestionnaireQuery();
  if (data?.getQuestionnaire)
    return (<div>
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

   
      
      <div className="Bodyt">
       
        <div className="Body_Item1t">
          <b>THANK YOU FOR APPLYING TO CAMPUS AMABASSADOR</b>
        </div>
        <div className="Style1t">
          YOUR APPLICATION IS UNDER PROCESS.{" "}
          <a href="./">
            <span className="redt">click here{" "}</span>
          </a>
          to go to CA portal
        </div>
      </div>
      </div>
    );

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

   
    <div className="Bodyt">
      <div className="Body_Item1t">
        <b>THANK YOU FOR APPLYING FOR CAMPUS AMABASSADOR</b>
      </div>
      <div className="Style1t">
        TO COMPLETE YOUR APPLICATION PROCESS.{" "}
        <a href="./questionaire">
          <span className="redt">click here{" "}</span>
        </a>
        to fill questionaire
      </div>
    </div>
    </div>
  );
};

export default Body1;
