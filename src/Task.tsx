import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGetTasksQuery, useGetUserQuery, useGetTaskreviewQuery } from "./generated";
import Header from "./Header";
import "./Task.css";
import TaskPopup from "./TaskPopup";
import {useState} from "react"

function Task() {
  const {data: tasks, loading: taskLoad, error: taskError} = useGetTasksQuery({variables:{skip:null, limit:10000}})

  const {data, loading, error} = useGetUserQuery({variables:{userId: localStorage.getItem('id')!}})
  const [Com_tasks, setCom_tasks] = React.useState(0);
  const [points_earned, setPoints_earned] = React.useState(0);
  const [curr_task, setCurr_task] = React.useState('');
  const [pending, setPending] = React.useState(true);
  const [Task_List_marker, setTask_List_marker] = React.useState({
    left: "30px",
    width: window.innerWidth > 500 ? "176px" : "102.73px",
  });

  const [taskId, setTaskId] = useState("")
  const [user, setUser] = useState("")
  const {data: reviews, loading: reviewLoad, error: reviewError} = useGetTaskreviewQuery({variables: {filter: 
    { 
      reviewID: null,
      user: localStorage.getItem('id'),
      task: taskId
    }}
  })

  if(data?.getUser?.taskReviews.length)
  {
    var pts = 0;
    setCom_tasks(data.getUser.taskReviews.length)
    data.getUser.taskReviews.map(el => {
      if(el.points) pts += el.points
    })
    setPoints_earned(pts)
  } 

  return (
    <>
      <Header />
      <div className="Task">
        <h1>Tasks</h1>
        <div className="Task_taskCount">
          <h3>TASKS COMPLETED : {Com_tasks}</h3>
          <h3>TASKS REMAINING : {tasks?.getTasks.length! - Com_tasks}</h3>
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
            {tasks?.getTasks.map((task) => {
              setTaskId(task.id)
              console.log(reviews?.getTaskreview)
              if (pending) {
                if (!reviews?.getTaskreview) {
                  return (
                    <li onClick={() => setCurr_task(task.id)}>
                      <p>{task.brief}</p>
                      <p>POINTS : {reviews?.getTaskreview}</p>
                      {curr_task === task.id ? (
                        <div className="fullTaskView">
                          <button
                            onClick={() => {
                              setCurr_task('0');
                              console.log(curr_task);
                            }}
                          >
                            CLOSE <FaTimes />
                          </button>
                          <div className="header">
                            <p>{task.brief}</p>
                            {/* <p>Points : {review}</p> */}
                          </div>
                          <p className="taskDesc">{task.details}</p>
                          <div className="formGroup">
                            <p>Upload proof for above task</p>
                            <input type="file" />
                            <button>SUBMIT</button>
                          </div>
                          <p className="feedback">
                            <span>Feedback :</span>
                            <br />
                            {/* {review} */}
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
                    <p>{task.brief}</p>
                    {/* <p>POINTS : {task.points}</p> */}
                    {curr_task === task.id ? (
                      <div className="fullTaskView">
                        <button
                          onClick={() => {
                            setCurr_task('0');
                            console.log(curr_task);
                          }}
                        >
                          CLOSE <FaTimes />
                        </button>
                        <div className="header">
                          <p>{task.brief}</p>
                          {/* <p>Points : {task.points}</p> */}
                        </div>
                        <p className="taskDesc">{task.details}</p>
                        <div className="formGroup">
                          <p>Upload proof for above task</p>
                          <input type="file" />
                          <button>SUBMIT</button>
                        </div>
                        <p className="feedback">
                          <span>Feedback :</span>
                          <br />
                          {/* {task.feedback} */}
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
