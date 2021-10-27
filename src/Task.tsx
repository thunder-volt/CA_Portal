import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGetTasksQuery, useGetUserQuery, useGetTaskreviewQuery, useSubmitTaskMutation, useEditTaskSubmissionMutation } from "./generated";
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
  var i = 1;

  const [Com_tasks, setCom_tasks] = React.useState(0);
  const [points_earned, setPoints_earned] = React.useState(0);
  const [curr_task, setCurr_task] = React.useState('');
  const [pending, setPending] = React.useState(false);
  const [incomplete, setIncomplete] = React.useState(true)
  const [Task_List_marker, setTask_List_marker] = React.useState({
    left: "30px",
    width: window.innerWidth > 500 ? "176px" : "102.73px",
  });
  var [file, setFile] = useState<string[]>([])
  const [newFile, setNewFile] = useState<string[]>([])

  const {data: tasks, loading: askLoad, error: taskError} = useGetTasksQuery({variables:{skip:null, limit:10000}})
  const [submitTaskMutation, {data: submit,loading: submitLoad,error: submitError}] = useSubmitTaskMutation()
  const {data, loading, error} = useGetUserQuery({variables:{userId: localStorage.getItem('id')!}})
  const {data: reviews, loading: reviewLoad, error: reviewError} = useGetTaskreviewQuery({variables: {filter: 
    { 
      reviewID: null,
      user: localStorage.getItem('id'),
      task: curr_task
    }}
  })
  const [editTaskSubmissionMutation, {data: edit, loading: editLoad, error: editError}] = useEditTaskSubmissionMutation()
 
  const newFileUrl = (fileUpload : string) => {
    const config = {

      bucketName: "ca21",

      region: "ap-south-1",

      accessKeyId: "AKIA4VXHNASLCGXPQAHM",

      secretAccessKey: "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"

  }
  S3FileUpload.uploadFile(fileUpload, config)

            .then((data: any)=>{

                 setNewFile((old) => [...old, data.location])

             })

             .catch((err: any) =>{

                   alert(err);

              });

  }

  if(submit?.submitTask || edit?.editTaskSubmission)
  {
    const closeHandler = () => {window.location.reload()}
    return(
        <Dialog onClose={closeHandler} open={true}>
          <p>Submitted</p>
          <button onClick={closeHandler}>Close</button>
      </Dialog>
    )
  }
  if(submitLoad || loading || reviewLoad || editLoad)
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

  if(editError)
  {
    if(editError.message.includes("Task submission deadline over"))
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
    if(editError.message.includes("Task Submitted"))
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
      {i=1}
      <Header />
      <div className="Task">
        <h1>Tasks</h1>
        <div className="Task_taskCount">
          <h3>TASKS COMPLETED : {Com_tasks}</h3>
          <h3>TASKS REMAINING : {tasks?.getTasks.length! - Com_tasks}</h3>
          <h3>POINTS EARNED : {data?.getUser?.totalPoints ? data.getUser.totalPoints : 0}</h3>
        </div>
        <div className="Task_List">
          <div className="navbar">
          <button
              onClick={(e: any) => {
                console.log(e);
                setTask_List_marker({
                  left: e?.target?.offsetLeft + "px",
                  width: e?.target?.offsetWidth + "px",
                });
                setIncomplete(true);
                setPending(false)
              }}
            >
              {window.innerWidth < 500 ? "INCOMPLETE" : "INCOMPLETE TASKS"}
            </button>
            <button
              onClick={(e: any) => {
                setTask_List_marker({
                  left: e?.target?.offsetLeft + "px",
                  width: e?.target?.offsetWidth + "px",
                });
                setPending(true);
                setIncomplete(false)
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
                setIncomplete(false)
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
            {
            tasks?.getTasks.map((task) => {
              if(incomplete)
              {
                if (task.status === 'PENDING' || task.status === 'CLOSED') {
                  var date = new Date(parseInt(task.deadline))
                  return (
                    <li onClick={() => {setCurr_task(task.id)}}>
                      <p>{i++}</p>
                      <p>{task.brief}</p>
                      <p>{date.toLocaleDateString()}</p>
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
                            <p>{date.toLocaleDateString()}</p>
                          </div>
                          <p className="taskDesc">{task.details}</p>
                          <div className="formGroup">
                            <p>Upload proof for above task</p>
                            <input multiple type="file" onChange={async (e) => {
                              await setFile((old) => [...old, e.target.value])
                              console.log(file)
                            }} />
                            <button onClick={
                              async (e) => {
                                console.log(file)
                                file.map(f => {
                                  newFileUrl(f)
                                })
                                e.preventDefault()
                                try{
                                  await submitTaskMutation({variables:{data: {taskid:task.id, taskurl: newFile }}})
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
              }
              else
              if (pending) {
                if (task.status === 'SUBMITTED') {
                  var date = new Date(parseInt(task.deadline))
                  return (
                    <li onClick={() => {setCurr_task(task.id)}}>
                      <p>{i++}</p>
                      <p>{task.brief}</p>
                      <p>{date.toLocaleDateString()}</p>
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
                            <p>{date.toLocaleDateString()}</p>
                          </div>
                          <p className="taskDesc">{task.details}</p>
                          <div className="formGroup">
                          <div className="submitted-proofs">
                            <button id="edit" onClick={() => {
                              document.getElementById("delete")!.style.display = "block"
                              document.getElementById('edit-submit')!.style.display = "block"
                              document.getElementById('edit')!.style.display = "none"
                              setFile([])
                              reviews?.getTaskreview.map(t => {
                                setFile((old) => [...old, t.taskurl])
                              })
                            }}>Edit Proofs</button>
                            <p className="submit-heading"><b>Submitted Proofs</b></p>
                          {
                            reviews?.getTaskreview.map(el => {
                              return(
                                <div className="proof-group">
                                  <p>{el.taskurl}</p>
                                  <div className="button-group">
                                    <button id="delete" onClick={() => {file = file.filter(f => f === el.taskurl)}}>Delete</button>
                                  </div>
                            </div>
                              )
                            })
                          }
                          </div>
                           <div id="edit-submit">
                           <p>Upload proof for above task</p>
                           <input multiple type="file" onChange={async (e) => {
                              await setFile((old) => [...old, e.target.value])
                            }} />
                            <button onClick={
                              async (e) => {
                                e.preventDefault()
                                file.map(f => {
                                  newFileUrl(f)
                                })
                                try{
                                  await editTaskSubmissionMutation({variables:{data: {taskid:task.id, taskurl: newFile }}})
                                }catch(e){
                                  console.log(e)
                                }
                                document.getElementById("delete")!.style.display = "none"
                              document.getElementById('edit-submit')!.style.display = "none"
                              document.getElementById('edit')!.style.display = "block"
                              }
                            }>Submit changes</button>
                           </div>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </li>
                  );
                }
              } else {
                if(task.status === 'SUBMITTED' && !task.taskReviews)
                {var date = new Date(parseInt(task.deadline))
                return (
                  <li onClick={() => {setCurr_task(task.id)}}>
                    <p>{i++}</p>
                    <p>{task.brief}</p>
                    <p>{date.toLocaleDateString()}</p>
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
                          <p>{date.toLocaleDateString()}</p>
                        </div>
                        <p className="taskDesc">{task.details}</p>
                        <div className="formGroup">
                         <div className="submitted-proofs">
                           <p><b>Submitted Proofs</b></p>
                         {
                           reviews?.getTaskreview.map(el => {
                             return(
                               <p>{el.review}</p>
                             )
                           })
                         }
                         </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </li>
                );}
              }
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Task;
