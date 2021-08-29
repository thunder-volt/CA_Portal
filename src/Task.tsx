import React from "react";
import { FaTimes } from "react-icons/fa";
import Header from "./Header";
import "./Task.css";
import TaskPopup from "./TaskPopup";

function Task() {
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      task_title: "Task Title",
      points: 12,
      pointsEarned: 8,
      task_desc:
        "Subex AI Hackathon is an exciting way to solve an industry level challenge. Just get your hands on the problem statement and come up with a working solution. The selected finalists will get the valuable opportunity to present their solutions to a panel of experts from the ML field and gain experience like never before.The points scale will be same as in previous tasks, 1) 5 points for sharing in individual WhatsApp groups (no limit)2) 5 points for WhatsApp status, insta story, etc. (no limit) 3) 1 point for individual shares (limit of 10) 4) 10 points for sending a mail a) to the entire mailing list of your college or b) HoD or principal or dean (please note the extension of the mail id should be ac.in, points won't be given otherwise, also no points for sending mails to individual people unless they are a HoD or principal or dean) ( if they have sent a mail to both a) and b) you get only 10 points) . The deadline for this task is 14th February, 2021",
      status: true,
      feedback: "",
      uploaded_files: [
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
      ],
    },
    {
      id: 2,
      task_title: "Task Title",
      points: 12,
      pointsEarned: 8,
      task_desc:
        "Subex AI Hackathon is an exciting way to solve an industry level challenge. Just get your hands on the problem statement and come up with a working solution. The selected finalists will get the valuable opportunity to present their solutions to a panel of experts from the ML field and gain experience like never before.The points scale will be same as in previous tasks, 1) 5 points for sharing in individual WhatsApp groups (no limit)2) 5 points for WhatsApp status, insta story, etc. (no limit) 3) 1 point for individual shares (limit of 10) 4) 10 points for sending a mail a) to the entire mailing list of your college or b) HoD or principal or dean (please note the extension of the mail id should be ac.in, points won't be given otherwise, also no points for sending mails to individual people unless they are a HoD or principal or dean) ( if they have sent a mail to both a) and b) you get only 10 points) . The deadline for this task is 14th February, 2021",
      status: true,
      feedback: "",
      uploaded_files: [
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
      ],
    },
    {
      id: 3,
      task_title: "Task Title",
      points: 12,
      pointsEarned: 8,
      task_desc:
        "Subex AI Hackathon is an exciting way to solve an industry level challenge. Just get your hands on the problem statement and come up with a working solution. The selected finalists will get the valuable opportunity to present their solutions to a panel of experts from the ML field and gain experience like never before.The points scale will be same as in previous tasks, 1) 5 points for sharing in individual WhatsApp groups (no limit)2) 5 points for WhatsApp status, insta story, etc. (no limit) 3) 1 point for individual shares (limit of 10) 4) 10 points for sending a mail a) to the entire mailing list of your college or b) HoD or principal or dean (please note the extension of the mail id should be ac.in, points won't be given otherwise, also no points for sending mails to individual people unless they are a HoD or principal or dean) ( if they have sent a mail to both a) and b) you get only 10 points) . The deadline for this task is 14th February, 2021",
      status: true,
      feedback: "",
      uploaded_files: [
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
      ],
    },
    {
      id: 4,
      task_title: "Task Title",
      points: 12,
      pointsEarned: 8,
      task_desc:
        "Subex AI Hackathon is an exciting way to solve an industry level challenge. Just get your hands on the problem statement and come up with a working solution. The selected finalists will get the valuable opportunity to present their solutions to a panel of experts from the ML field and gain experience like never before.The points scale will be same as in previous tasks, 1) 5 points for sharing in individual WhatsApp groups (no limit)2) 5 points for WhatsApp status, insta story, etc. (no limit) 3) 1 point for individual shares (limit of 10) 4) 10 points for sending a mail a) to the entire mailing list of your college or b) HoD or principal or dean (please note the extension of the mail id should be ac.in, points won't be given otherwise, also no points for sending mails to individual people unless they are a HoD or principal or dean) ( if they have sent a mail to both a) and b) you get only 10 points) . The deadline for this task is 14th February, 2021",
      status: true,
      feedback:
        "The points scale will be same as in previous tasks,  1) 5 points for sharing in individual WhatsApp groups (no limit)2) 5 points for WhatsApp status, insta story, etc. (no limit)  3) 1 point for individual shares (limit of 10)",
      uploaded_files: [
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
      ],
    },
    {
      id: 5,
      task_title: "Task Title",
      points: 12,
      pointsEarned: 8,
      task_desc:
        "Subex AI Hackathon is an exciting way to solve an industry level challenge. Just get your hands on the problem statement and come up with a working solution. The selected finalists will get the valuable opportunity to present their solutions to a panel of experts from the ML field and gain experience like never before.The points scale will be same as in previous tasks, 1) 5 points for sharing in individual WhatsApp groups (no limit)2) 5 points for WhatsApp status, insta story, etc. (no limit) 3) 1 point for individual shares (limit of 10) 4) 10 points for sending a mail a) to the entire mailing list of your college or b) HoD or principal or dean (please note the extension of the mail id should be ac.in, points won't be given otherwise, also no points for sending mails to individual people unless they are a HoD or principal or dean) ( if they have sent a mail to both a) and b) you get only 10 points) . The deadline for this task is 14th February, 2021",
      status: false,
      feedback: "",
      uploaded_files: [
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
      ],
    },
    {
      id: 6,
      task_title: "Task Title",
      points: 12,
      pointsEarned: 8,
      task_desc:
        "Subex AI Hackathon is an exciting way to solve an industry level challenge. Just get your hands on the problem statement and come up with a working solution. The selected finalists will get the valuable opportunity to present their solutions to a panel of experts from the ML field and gain experience like never before.The points scale will be same as in previous tasks, 1) 5 points for sharing in individual WhatsApp groups (no limit)2) 5 points for WhatsApp status, insta story, etc. (no limit) 3) 1 point for individual shares (limit of 10) 4) 10 points for sending a mail a) to the entire mailing list of your college or b) HoD or principal or dean (please note the extension of the mail id should be ac.in, points won't be given otherwise, also no points for sending mails to individual people unless they are a HoD or principal or dean) ( if they have sent a mail to both a) and b) you get only 10 points) . The deadline for this task is 14th February, 2021",
      status: true,
      feedback: "",
      uploaded_files: [
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
      ],
    },
    {
      id: 7,
      task_title: "Task Title",
      points: 12,
      pointsEarned: 8,
      task_desc:
        "Subex AI Hackathon is an exciting way to solve an industry level challenge. Just get your hands on the problem statement and come up with a working solution. The selected finalists will get the valuable opportunity to present their solutions to a panel of experts from the ML field and gain experience like never before.The points scale will be same as in previous tasks, 1) 5 points for sharing in individual WhatsApp groups (no limit)2) 5 points for WhatsApp status, insta story, etc. (no limit) 3) 1 point for individual shares (limit of 10) 4) 10 points for sending a mail a) to the entire mailing list of your college or b) HoD or principal or dean (please note the extension of the mail id should be ac.in, points won't be given otherwise, also no points for sending mails to individual people unless they are a HoD or principal or dean) ( if they have sent a mail to both a) and b) you get only 10 points) . The deadline for this task is 14th February, 2021",
      status: false,
      feedback: "",
      uploaded_files: [
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
      ],
    },
    {
      id: 8,
      task_title: "Task Title",
      points: 12,
      pointsEarned: 8,
      task_desc:
        "Subex AI Hackathon is an exciting way to solve an industry level challenge. Just get your hands on the problem statement and come up with a working solution. The selected finalists will get the valuable opportunity to present their solutions to a panel of experts from the ML field and gain experience like never before.The points scale will be same as in previous tasks, 1) 5 points for sharing in individual WhatsApp groups (no limit)2) 5 points for WhatsApp status, insta story, etc. (no limit) 3) 1 point for individual shares (limit of 10) 4) 10 points for sending a mail a) to the entire mailing list of your college or b) HoD or principal or dean (please note the extension of the mail id should be ac.in, points won't be given otherwise, also no points for sending mails to individual people unless they are a HoD or principal or dean) ( if they have sent a mail to both a) and b) you get only 10 points) . The deadline for this task is 14th February, 2021",
      status: false,
      feedback: "",
      uploaded_files: [
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
        {
          filename: "filename",
          url: "https://www.google.com/",
        },
      ],
    },
  ]);

  const [Com_tasks, setCom_tasks] = React.useState(0);
  const [points_earned, setPoints_earned] = React.useState(0);
  const [curr_task, setCurr_task] = React.useState(0);
  const [pending, setPending] = React.useState(true);
  const [Task_List_marker, setTask_List_marker] = React.useState({
    left: "30px",
    width: window.innerWidth > 500 ? "176px" : "102.73px",
  });

  React.useEffect(() => {
    let temp = 0;
    let temp2 = 0;
    tasks.forEach((task) => {
      if (task.status) temp++;

      temp2 += task.pointsEarned;
    });
    setCom_tasks(temp);
    setPoints_earned(temp2);
  }, []);

  return (
    <>
      <Header />
      <div className="Task">
        <h1>Tasks</h1>
        <div className="Task_taskCount">
          <h3>TASKS COMPLETED : {Com_tasks}</h3>
          <h3>TASKS REMAINING : {tasks.length - Com_tasks}</h3>
          <h3>POINTS EARNED : {points_earned}</h3>
        </div>
        <div className="Task_List">
          <div className="navbar">
            <button
              onClick={(e: any) => {
                setTask_List_marker({
                  left: e?.target?.offsetLeft + "px",
                  width: e?.target?.offsetWidth + "px",
                });
                setPending(true);
              }}
            >
              {window.innerWidth < 500 ? "PENDING" : "PENDING TASKS"}
            </button>
            <button
              onClick={(e: any) => {
                console.log(e);
                setTask_List_marker({
                  left: e?.target?.offsetLeft + "px",
                  width: e?.target?.offsetWidth + "px",
                });
                setPending(false);
              }}
            >
              {window.innerWidth < 500 ? "COMPLETED" : "COMPLETED TASKS"}
            </button>
            <span
              id="Task_List_marker"
              style={{
                left: Task_List_marker.left,
                width: Task_List_marker.width,
              }}
            ></span>
          </div>
          <ul>
            {tasks.map((task) => {
              if (pending) {
                if (!task.status) {
                  return (
                    <li onClick={() => setCurr_task(task.id)}>
                      <p>{task.task_title}</p>
                      <p>POINTS : {task.points}</p>
                      {curr_task === task.id ? (
                        <div className="fullTaskView">
                          <button
                            onClick={() => {
                              setCurr_task(0);
                              console.log(curr_task);
                            }}
                          >
                            CLOSE <FaTimes />
                          </button>
                          <div className="header">
                            <p>{task.task_title}</p>
                            <p>Points : {task.points}</p>
                          </div>
                          <p className="taskDesc">{task.task_desc}</p>
                          <div className="formGroup">
                            <p>Upload proof for above task</p>
                            <input type="file" />
                            <button>SUBMIT</button>
                          </div>
                          <p className="feedback">
                            <span>Feedback :</span>
                            <br />
                            {task.feedback}
                          </p>
                        </div>
                      ) : (
                        <></>
                      )}
                    </li>
                  );
                }
              } else {
                return (
                  <li onClick={() => setCurr_task(task.id)}>
                    <p>{task.task_title}</p>
                    <p>POINTS : {task.points}</p>
                    {curr_task === task.id ? (
                      <div className="fullTaskView">
                        <button
                          onClick={() => {
                            setCurr_task(0);
                            console.log(curr_task);
                          }}
                        >
                          CLOSE <FaTimes />
                        </button>
                        <div className="header">
                          <p>{task.task_title}</p>
                          <p>Points : {task.points}</p>
                        </div>
                        <p className="taskDesc">{task.task_desc}</p>
                        <div className="formGroup">
                          <p>Upload proof for above task</p>
                          <input type="file" />
                          <button>SUBMIT</button>
                        </div>
                        <p className="feedback">
                          <span>Feedback :</span>
                          <br />
                          {task.feedback}
                        </p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Task;
