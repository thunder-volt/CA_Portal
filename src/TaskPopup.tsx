import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

interface Props {
  task: {
    id: number;
    task_title: string;
    points: number;
    pointsEarned: number;
    status: boolean;
    task_desc: string;
    feedback: string;
  };
}

function TaskPopup(props: Props) {
  return (
    <div className="fullTaskView">
      <button>
        CLOSE <FaTimes />
      </button>
      <div className="header">
        <p>{props.task.task_title}</p>
        <p>Points : {props.task.points}</p>
      </div>
      <p className="taskDesc">{props.task.task_desc}</p>
      <p>Uploaof for above task</p>
      <input type="file" />
      <button>SUBMIT</button>
      <p>
        <span>Feedback :</span>
        <br />
        {props.task.feedback}
      </p>
    </div>
  );
}

export default TaskPopup;
