import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {
  useGetTasksQuery,
  useGetTaskreviewQuery,
  useSubmitTaskMutation,
  useEditTaskSubmissionMutation,
} from './generated'
import Header from './Header'
import './Task.css'
import TaskPopup from './TaskPopup'
import { useState } from 'react'
import { Dialog } from '@material-ui/core'
import { useHistory } from 'react-router'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import AWS from 'aws-sdk'

// import S3FileUpload from 'react-s3';
const uploadFile = require('react-s3')
const S3FileUpload = require('react-s3')

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    directory?: string;
    webkitdirectory?:string;
    moxdirectory?:string;
  }
}


function Task() {
  const history = useHistory()
  var i = 1
  const [curr_task, setCurr_task] = React.useState('')
  const [pending, setPending] = React.useState(false)
  const [incomplete, setIncomplete] = React.useState(true)
  const [Task_List_marker, setTask_List_marker] = React.useState({
    left: '30px',
    width: window.innerWidth > 500 ? '176px' : '102.73px',
  })
  var [file, setFile] = useState<File[]>([])
  var [newFile, setNewFile] = useState<string[]>([])

  const {
    data: tasks,
    loading: askLoad,
    error: taskError,
  } = useGetTasksQuery({ variables: { skip: null, limit: 10000 } })

  var pts = 0
  var comp = 0
  if (tasks) {
    tasks.getTasks.map((t) => {
      if (
        t.taskReviews[0]?.points !== null &&
        t.taskReviews[0]?.points !== undefined
      ) {
        pts += t.taskReviews[0]?.points
        comp++
      }
    })
  }


  // var pts = 0;
  // var comp = 0;
  // tasks?.getTasks.map(t => {
  //   if(t.taskReviews[0]?.points)
  //   {
  //     pts += t.taskReviews[0]?.points;
  //     comp++;
  //   }
  // })
  // setCom_tasks(comp);
  // setPoints_earned(pts);

  const [
    submitTaskMutation,
    { data: submit, loading: submitLoad, error: submitError },
  ] = useSubmitTaskMutation()

  const {
    data: reviews,
    loading: reviewLoad,
    error: reviewError,
  } = useGetTaskreviewQuery({
    variables: {
      filter: {
        reviewID: null,
        user: localStorage.getItem('id'),
        task: curr_task,
      },
    },
  })
  const [
    editTaskSubmissionMutation,
    { data: edit, loading: editLoad, error: editError },
  ] = useEditTaskSubmissionMutation()

  AWS.config.update({
    accessKeyId: 'AKIA4VXHNASLCGXPQAHM',
    secretAccessKey: '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',
  })
  const myBucket = new AWS.S3({
    params: { Bucket: 'ca21' },
    region: 'ap-south-1',
  })
  const UploadImageToS3WithNativeSdk = async (file: any) => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: 'ca21',
      Key: file.name,
    }

    await myBucket
      .putObject(params)
      .on('httpUploadProgress', (evt) => {})
      .send((err) => {
        if (err) console.log(err)
      })
  }

  if (submit?.submitTask || edit?.editTaskSubmission) {
    const closeHandler = () => {
      window.location.reload()
    }
    return (
      <Dialog onClose={closeHandler} open={true}>
        <p>Submitted</p>
        <button onClick={closeHandler}>Close</button>
      </Dialog>
    )
  }
  if (submitLoad || reviewLoad || editLoad) {
    return (
      <Dialog open={true}>
        <p>Loading...</p>
      </Dialog>
    )
  }
  if (submitError) {
    if (submitError.message.includes('Task submission deadline over')) {
      const closeHandler = () => {
        window.location.reload()
      }
      return (
        <Dialog onClose={closeHandler} open={true}>
          <p>Task submission deadline over</p>
          <button onClick={closeHandler}>Close</button>
        </Dialog>
      )
    } else if (submitError.message.includes('Task Submitted')) {
      const closeHandler = () => {
        window.location.reload()
      }
      return (
        <Dialog onClose={closeHandler} open={true}>
          <p>Task Submitted</p>
          <button onClick={closeHandler}>Close</button>
        </Dialog>
      )
    } else {
      const closeHandler = () => {
        window.location.reload()
      }
      return (
        <Dialog onClose={closeHandler} open={true}>
          <p>Error occured</p>
          <button onClick={closeHandler}>Close</button>
        </Dialog>
      )
    }
  }

  if (editError) {
    if (editError.message.includes('Task submission deadline over')) {
      const closeHandler = () => {
        window.location.reload()
      }
      return (
        <Dialog onClose={closeHandler} open={true}>
          <p>Task submission deadline over</p>
          <button onClick={closeHandler}>Close</button>
        </Dialog>
      )
    } else if (editError.message.includes('Task Submitted')) {
      const closeHandler = () => {
        window.location.reload()
      }
      return (
        <Dialog onClose={closeHandler} open={true}>
          <p>Task Submitted</p>
          <button onClick={closeHandler}>Close</button>
        </Dialog>
      )
    } else {
      const closeHandler = () => {
        window.location.reload()
      }
      return (
        <Dialog onClose={closeHandler} open={true}>
          <p>Error occured</p>
          <button onClick={closeHandler}>Close</button>
        </Dialog>
      )
    }
  }

  return (
    <>
      {(i = 1)}
      <Header />
      <div className='Task'>
        <h1>Tasks</h1>
        <div className='Task_taskCount'>
          <h3>TASKS COMPLETED : {comp}</h3>
          <h3>TASKS REMAINING : {tasks?.getTasks.length! - comp}</h3>
          <h3>POINTS EARNED : {pts}</h3>
        </div>
        <div className='Task_List'>
          <div className='navbar'>
            <button
              onClick={(e: any) => {
                console.log(e)
                setTask_List_marker({
                  left: e?.target?.offsetLeft + 'px',
                  width: e?.target?.offsetWidth + 'px',
                })
                setIncomplete(true)
                setPending(false)
              }}
            >
              {window.innerWidth < 500 ? 'INCOMPLETE' : 'INCOMPLETE TASKS'}
            </button>
            <button
              onClick={(e: any) => {
                setTask_List_marker({
                  left: e?.target?.offsetLeft + 'px',
                  width: e?.target?.offsetWidth + 'px',
                })
                setPending(true)
                setIncomplete(false)
              }}
            >
              {window.innerWidth < 500 ? 'PENDING' : 'PENDING TASKS'}
            </button>
            <button
              onClick={(e: any) => {
                console.log(e)
                setTask_List_marker({
                  left: e?.target?.offsetLeft + 'px',
                  width: e?.target?.offsetWidth + 'px',
                })
                setPending(false)
                setIncomplete(false)
              }}
            >
              {window.innerWidth < 500 ? 'COMPLETED' : 'COMPLETED TASKS'}
            </button>
            <span
              id='Task_List_marker'
              style={{
                left: Task_List_marker.left,
                width: Task_List_marker.width,
              }}
            ></span>
          </div>
          <ul>
            {tasks?.getTasks.map((task) => {
              if (incomplete) {
                if (task.status === 'PENDING' || task.status === 'CLOSED') {
                  var date = new Date(parseInt(task.deadline))
                  return (
                    <li
                      onClick={() => {
                        setCurr_task(task.id)
                      }}
                    >
                      <p>{i++}</p>
                      <ReactMarkdown
                        children={task.brief}
                        remarkPlugins={[remarkGfm]}
                      />
                      <p>{date.toLocaleDateString()}</p>
                      {curr_task === task.id ? (
                        <div className='fullTaskView'>
                          <button
                            onClick={() => {
                              window.location.reload()
                              setCurr_task('0')
                              console.log(curr_task)
                            }}
                          >
                            CLOSE <FaTimes />
                          </button>
                          <div className='header'>
                            <ReactMarkdown
                        children={task.brief}
                        remarkPlugins={[remarkGfm]}
                      />
                            <p>{date.toLocaleDateString()}</p>
                          </div>
                          <p className='taskDesc'>{task.details}</p>
                          <div className='formGroup'>
                            <p>Upload proof for above task</p>
<<<<<<< HEAD
                            <input
                              multiple
                              type='file'
                              onChange={async (e) => {
                                if (e.target != null)
                                  await setFile((old) => [
                                    ...old,
                                    e.target.files![0],
                                  ])
                                console.log(file)
                              }}
                            />
                            <button
                              onClick={async (e) => {
=======
                            <input multiple type="file" onChange={async (e : any) => {
                                let output = document.getElementById("listing");
                                let files = e?.target.files;
                              
                                for (let i=0; i<files.length; i++) {
                                  let item = document.createElement("li");    
                                  item.innerHTML = files[i].webkitRelativePath;
                                  output?.appendChild(item);
                                  await setNewFile(old => [...old, `https://ca21.s3-ap-south-1.amazonaws.com/${files![i].name}`])
                                  await setFile((old) => [...old, files![i]])
                                };
                                console.log(await file)
                            }} id="filepicker" name="fileList" moxdirectory="" webkitdirectory="" directory="" />
                            <ul id="listing"></ul>
                            {/* {
                              document.getElementById("filepicker")?.addEventListener("change", async function(event : any) {
                                let output = document.getElementById("listing");
                                let files = event?.target.files;
                              
                                for (let i=0; i<files.length; i++) {
                                  let item = document.createElement("li");    
                                  item.innerHTML = files[i].webkitRelativePath;
                                  output?.appendChild(item);
                                  await setFile((old) => [...old, files![i]])
                                };
                                console.log(await file)
                              }, false)
                            } */}
                            <button onClick={
                              async (e) => {
>>>>>>> 34b891e6d425c12016324d7b4e36db0b086ff048
                                e.preventDefault()
                                console.log(newFile)
                                file.map(async (f) => {
<<<<<<< HEAD
                                  await UploadImageToS3WithNativeSdk(f)
                                  //  setNewFile((old) => [...old,`https://ca21.s3-ap-south-1.amazonaws.com/${f.name}`])
                                  setNewFile([
                                    `https://ca21.s3-ap-south-1.amazonaws.com/${f.name}`,
                                  ])
                                })
                                try {
                                  await submitTaskMutation({
                                    variables: {
                                      data: {
                                        taskid: task.id,
                                        taskurl: [
                                          `https://ca21.s3-ap-south-1.amazonaws.com/${file[0].name}`,
                                        ],
                                      },
                                    },
                                  })
                                  console.log(newFile)
                                } catch (e) {
=======
                                 await UploadImageToS3WithNativeSdk(f)
                                })
                                try{
                                   submitTaskMutation({variables:{data: {taskid:task.id, taskurl: newFile }}})
                                  console.log(await newFile)
                                }catch(e){
>>>>>>> 34b891e6d425c12016324d7b4e36db0b086ff048
                                  console.log(e)
                                }
                                console.log(submit?.submitTask.valueOf)
                                setFile([])
                                setNewFile([])
                              }}
                            >
                              SUBMIT
                            </button>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </li>
                  )
                }
              } else if (pending) {
                if (
                  task.status === 'SUBMITTED' &&
                  task.taskReviews[0].review == null
                ) {
                  var date = new Date(parseInt(task.deadline))
                  return (
                    <li
                      onClick={() => {
                        setCurr_task(task.id)
                      }}
                    >
                      <p>{i++}</p>
                      <ReactMarkdown
                        children={task.brief}
                        remarkPlugins={[remarkGfm]}
                      />
                      <p>{date.toLocaleDateString()}</p>
                      {curr_task === task.id ? (
                        <div className='fullTaskView'>
                          <button
                            onClick={() => {
                              window.location.reload()
                              setCurr_task('0')
                              console.log(curr_task)
                            }}
                          >
                            CLOSE <FaTimes />
                          </button>
                          <div className='header'>
                            <ReactMarkdown
                              children={task.brief}
                              remarkPlugins={[remarkGfm]}
                            />
                            <p>{date.toLocaleDateString()}</p>
                          </div>
<<<<<<< HEAD
                          <p className='taskDesc'>{task.details}</p>
                          <div className='formGroup'>
                            <div className='submitted-proofs'>
                              <button
                                id='edit'
                                onClick={() => {
                                  if (task.taskReviews[0] !== null) {
                                    document.getElementById(
                                      'delete'
                                    )!.style.display = 'block'
                                  }
                                  document.getElementById(
                                    'edit'
                                  )!.style.display = 'none'
                                  document.getElementById(
                                    'edit-submit'
                                  )!.style.display = 'block'
                                  setFile([])
                                  reviews?.getTaskreview.map((t) => {
                                    setNewFile((old) => [...old, t.taskurl])
                                  })
                                }}
                              >
                                Edit Proofs
                              </button>
                              <div className='proof-group'>
                                <p>{task.taskReviews[0].taskurl}</p>
                                <div className='button-group'>
                                  <button
                                    id='delete'
                                    onClick={async (e) => {
                                      e.preventDefault()
                                      try {
                                        await editTaskSubmissionMutation({
                                          variables: {
                                            data: {
                                              taskid: task.id,
                                              taskurl: [``],
                                            },
                                          },
                                        })
                                      } catch (e) {
                                        console.log(e)
                                      }
                                      setFile([])
                                      setNewFile([])
                                    }}
                                  >
                                    Delete
                                  </button>
                                </div>
=======
                          <p className="taskDesc">{task.details}</p>
                          <div className="formGroup">
                          <div className="submitted-proofs">
                            <button id="edit" onClick={async () => {
                              if(task.taskReviews[0] !== null)
                              {   
                                document.getElementById("delete")!.style.display = "block"
                              }
                              document.getElementById('edit')!.style.display = "none"
                              document.getElementById('edit-submit')!.style.display = "block"
                              setFile([])
                              // console.log(reviews?.getTaskreview)
                              // reviews?.getTaskreview.map(t => {
                              //   setNewFile((old) => [...old, t.taskurl])
                              // })
                              console.log(task.taskReviews)
                              task.taskReviews[0].taskurl.split(" ").map(async (u: any) => {
                                await setNewFile((old) => [...old, u])
                                console.log(u)
                              })
                            }}>Edit Proofs</button>
                            <div className="proof-group">
                              {/* <p>{task.taskReviews[0].taskurl}</p> */}
                              <ul id="listingEdit">
                                {
                                  newFile.map((u: any) => {
                                    return(
                                      <li>
                                        {u}
                                      </li>
                                    )
                                  })
                                }
                              </ul>
                              <div className="button-group">
                                <button id="delete" onClick={async (e) => {
                                e.preventDefault()
                                try{
                                  await editTaskSubmissionMutation({variables:{data: {taskid:task.id, taskurl: [``] }}})
                                }catch(e){
                                  console.log(e)
                                }
                                setFile([])
                                setNewFile([])
                              }}>Delete</button>
>>>>>>> 34b891e6d425c12016324d7b4e36db0b086ff048
                              </div>
                              {/* {
                            reviews?.getTaskreview.map(el => {
                              if(reviews?.getTaskreview[0] != null)
                                {   
                                  document.getElementById("delete")!.style.display = "none"
                                }
                                document.getElementById('edit')!.style.display = "block"
                                document.getElementById('edit-submit')!.style.display = "none"
                                setNewFile([el.taskurl])
                              el.taskurl && <div className="proof-group">
                              <p>{task.taskReviews[0].taskurl}</p>
                              <div className="button-group">
                                <button id="delete" onClick={() => {newFile = newFile.filter(f => f === el.taskurl)}}>Delete</button>
                              </div>
                            </div>
                            })
                          } */}
<<<<<<< HEAD
                            </div>
                            <div id='edit-submit'>
                              <p>Upload proof for above task</p>
                              <input
                                multiple
                                type='file'
                                onChange={async (e) => {
                                  await setFile((old) => [
                                    ...old,
                                    e.target.files![0],
                                  ])
                                }}
                              />
                              <button
                                onClick={async (e) => {
                                  e.preventDefault()
                                  file.map((f) => {
                                    UploadImageToS3WithNativeSdk(f)
                                    setNewFile((old) => [
                                      ...old,
                                      `https://ca21.s3-ap-south-1.amazonaws.com/${f.name}`,
                                    ])
                                  })
                                  try {
                                    await editTaskSubmissionMutation({
                                      variables: {
                                        data: {
                                          taskid: task.id,
                                          taskurl: [
                                            `https://ca21.s3-ap-south-1.amazonaws.com/${file[0].name}`,
                                          ],
                                        },
                                      },
                                    })
                                  } catch (e) {
                                    console.log(e)
                                  }
                                  setFile([])
                                  setNewFile([])
                                }}
                              >
                                Submit changes
                              </button>
                            </div>
=======
                          </div>
                           <div id="edit-submit">
                           <p>Upload proof for above task</p>
                           <input multiple type="file" onChange={async (e : any) => {
                                let output = document.getElementById("listingEdit");
                                let files = e?.target.files;
                              
                                for (let i=0; i<files.length; i++) {
                                  let item = document.createElement("li");    
                                  item.innerHTML = files[i].webkitRelativePath;
                                  output?.appendChild(item);
                                  await setNewFile(old => [...old, `https://ca21.s3-ap-south-1.amazonaws.com/${files![i].name}`])
                                  await setFile((old) => [...old, files![i]])
                                };
                                console.log(await file)
                            }} id="filepickerEdit" name="fileList" moxdirectory="" webkitdirectory="" directory="" />
                            <button onClick={
                              async (e) => {
                                e.preventDefault()
                                file.map(f => {
                                  UploadImageToS3WithNativeSdk(f)
                                  setNewFile(old => [...old, `https://ca21.s3-ap-south-1.amazonaws.com/${f.name}`])
                                })
                                try{
                                  editTaskSubmissionMutation({variables:{data: {taskid:task.id, taskurl: newFile }}})
                                }catch(e){
                                  console.log(e)
                                }
                                setFile([])
                                setNewFile([])
                              }
                            }>Submit changes</button>
                           </div>
>>>>>>> 34b891e6d425c12016324d7b4e36db0b086ff048
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </li>
                  )
                }
              } else {
                if (
                  task.status === 'SUBMITTED' &&
                  task?.taskReviews[0]?.review != null
                ) {
                  var date = new Date(parseInt(task.deadline))
                  return (
                    <li
                      onClick={() => {
                        setCurr_task(task.id)
                      }}
                    >
                      <p>{i++}</p>
                      <ReactMarkdown
                        children={task.brief}
                        remarkPlugins={[remarkGfm]}
                      />
                      <p>{date.toLocaleDateString()}</p>
                      <p>{task.taskReviews[0].points} pts</p>
                      {curr_task === task.id ? (
                        <div className='fullTaskView'>
                          <button
                            onClick={() => {
                              window.location.reload()
                              setCurr_task('0')
                              console.log(curr_task)
                            }}
                          >
                            CLOSE <FaTimes />
                          </button>
                          <div className='header'>
                            <ReactMarkdown
                        children={task.brief}
                        remarkPlugins={[remarkGfm]}
                      />
                            <p>{date.toLocaleDateString()}</p>
                          </div>
                          <p className='taskDesc'>{task.details}</p>
                          <div className='formGroup'>
                            <div className='submitted-proofs'>
                              <p>
                                <b>Submitted Proofs</b>
                              </p>
                              <p>{task.taskReviews[0].taskurl}</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </li>
                  )
                }
              }
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Task
