import React from "react";
import "./Body1.css";
import { useGetQuestionnaireQuery } from "./generated";

const Body1 = () => {
  const { data } = useGetQuestionnaireQuery();
  if (data?.getQuestionnaire)
    return (
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
    );

  return (
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
  );
};

export default Body1;
