import React from "react";
import "./Body1.css";
import { useGetQuestionnaireQuery } from "./generated";
import Particles from 'react-tsparticles';
import { useHistory, useParams } from "react-router";
import {
  ApplicationResultInput,
  useApplicationResultMutation,
  useGetQuestionnaireByUserIdQuery,
  useGetUserQuery,
  UserRole,
} from "./generated";


const Body1 = () => {
  let { id }: any = useParams();
  const {
    data: getUserData,
    loading: getUserLoading,
    error: getUserError,
  } = useGetUserQuery({ variables: { userId: id } });

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
       {/* <div className="jj">
       <h2 >{getUserData.getUser?.name}</h2>
       </div> */}
       
        <div className="Body_Item1t">
        {/* <b>{getUserData.getUser?.name}</b> */}
        <div>Hello {localStorage.getItem("name")}, </div>
          <b>THANK YOU FOR APPLYING FOR THE CAMPUS AMBASSADOR PROGRAM</b>
          
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
        <b> Hello{localStorage.getItem("name")},</b>
  
        <b>THANK YOU FOR SIGNING UP FOR THE SHAASTRA CAMPUS AMBASSADOR PROGRAM</b>
       
      
      </div>
      <div className="Style1t">
        Please complete the questionnaire by{" "}
        <a href="./questionaire">
          <span className="redt">clicking here{" "}</span>
        </a>
        before "Given Date".
      </div>
    </div>
    </div>
  );
};

export default Body1;
