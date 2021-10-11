import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGetTasksQuery, useGetUserQuery, useGetTaskreviewQuery, useSubmitTaskMutation } from "./generated";
import Header from "./Header";
import "./Task.css";
import TaskPopup from "./TaskPopup";
import {useState} from "react"
import {Dialog} from "@material-ui/core"
import { useHistory } from "react-router";
// import S3FileUpload from 'react-s3';
const S3FileUpload = require('react-s3')

function Task() {
  const history = useHistory()
  const {data: tasks, loading: askLoad, error: taskError} = useGetTasksQuery({variables:{skip:null, limit:10000}})
  const [submitTaskMutation, {data: submit,loading: submitLoad,error: submitError}] = useSubmitTaskMutation()
  const {data, loading, error} = useGetUserQuery({variables:{userId: localStorage.getItem('id')!}})
  const [Com_tasks, setCom_tasks] = React.useState(0);
  const [points_earned, setPoints_earned] = React.useState(0);
  const [curr_task, setCurr_task] = React.useState('');
  const [pending, setPending] = React.useState(true);
  const [Task_List_marker, setTask_List_marker] = React.useState({
    left: "30px",
    width: window.innerWidth > 500 ? "176px" : "102.73px",
  });
  const [file, setFile] = useState("")
  const [taskId, setTaskId] = useState("")
  const [user, setUser] = useState("")
  const {data: reviews, loading: reviewLoad, error: reviewError} = useGetTaskreviewQuery({variables: {filter: 
    { 
      reviewID: null,
      user: localStorage.getItem('id'),
      task: curr_task
    }}
  })

  const fileHandler = (fileUpload : any) => {
    const config = {

      bucketName: "sampark21",

      region: "Asia Pacific (Mumbai) ap-south-1",

      accessKeyId: "AKIA4VXHNASLHOCKWFPF",

      secretAccessKey: "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"

  }
  S3FileUpload.uploadFile(fileUpload, config)

            .then((data: any)=>{

                  console.log(data.location);// it return the file url

             })

             .catch((err: any) =>{

                   alert(err);

              });

  }

  if(submit?.submitTask)
  {
    const closeHandler = () => {window.location.reload()}
    console.log(submit.submitTask)
    return(
        <Dialog onClose={closeHandler} open={true}>
          <p>Submitted</p>
          <button onClick={closeHandler}>Close</button>
      </Dialog>
    )
  }
  if(submitLoad || loading || reviewLoad)
  {
    return(
      <Dialog open={true}>
        <p>Loading...</p>
    </Dialog>)
  }
  if(submitError)
  {
    if(submitError.message.includes("Task submission deadline over"))
    {
      const closeHandler = () => {window.location.reload()}
      return(
          <Dialog onClose={closeHandler} open={true}>
            <p>Task submission deadline over</p>
            <button onClick={closeHandler}>Close</button>
        </Dialog>
      )
    }
    else
    if(submitError.message.includes("Task Submitted"))
    {
      const closeHandler = () => {window.location.reload()}
      return(
          <Dialog onClose={closeHandler} open={true}>
            <p>Task Submitted</p>
            <button onClick={closeHandler}>Close</button>
        </Dialog>
      )
    }
    else
    {
      const closeHandler = () => {window.location.reload()}
      return(
          <Dialog onClose={closeHandler} open={true}>
            <p>Error occured</p>
            <button onClick={closeHandler}>Close</button>
        </Dialog>
      )
    }
  }

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
              if (pending) {
                console.log(task.status)
                if (task.status === 'PENDING' || task.status === 'CLOSED') {
                  return (
                    <li onClick={() => {setCurr_task(task.id)}}>
                      <p>{task.brief}</p>
                      {curr_task === task.id ? (
                        <div className="fullTaskView">
                          <button
                            onClick={() => {
                              window.location.reload()
                              setCurr_task('0');
                              console.log(curr_task);
                            }}
                          >
                            CLOSE <FaTimes />
                          </button>
                          <div className="header">
                            <p>{task.brief}</p>
                          </div>
                          <p className="taskDesc">{task.details}</p>
                          <div className="formGroup">
                            <p>Upload proof for above task</p>
                            <input type="file" onChange={fileHandler} />
                            <button onClick={
                              async (e) => {
                                e.preventDefault()
                                try{
                                  await submitTaskMutation({variables:{data: {taskid:task.id, taskurl: [file]}}})
                                }catch(e){
                                  console.log(e)
                                }
                              }
                            }>SUBMIT</button>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </li>
                  );
                }
              } else {
                if(task.status=='COMPLETED')
                return (
                  <li onClick={() => {setCurr_task(task.id)}}>
                      <p>{task.brief}</p>
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
                            <p>Points : {reviews?.getTaskreview.map(r => {return(<span>{r.points}</span>)})}</p>
                          </div>
                          <p className="taskDesc">{task.details}</p>
                          <div className="formGroup">
                            <p>Upload proof for above task</p>
                            <input type="file" onChange={(e) => {setFile(e.target.value)}} />
                            <button onClick={
                              (e) => {
                                e.preventDefault()
                                try{
                                  submitTaskMutation({variables:{data: {taskid:task.id, taskurl: [file]}}})
                                }catch(e){console.log(e)}
                              }
                            }>SUBMIT</button>
                          </div>
                            {
                              data?.getUser?.taskReviews.map((r) => {
                                return(
                                  <p className="feedback">
                                    <span>Feedback :</span>
                                    <br />
                                    {r.review}
                                  </p>
                                )
                              })
                            }
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
