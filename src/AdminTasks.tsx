/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from 'react'
import './AdminTasks.css'
import TaskForm from './TaskForm'
import Logo from './assests/ShaastraLogo.png'
import { Dialog } from '@material-ui/core'
import { useDeleteTaskMutation, useGetTasksAdminQuery } from './generated'
import Header from './Header'
import { useHistory } from 'react-router'

function AdminTasks() {
  const history = useHistory()
  const [taskId, setTaskId] = useState("")
  const [display, setdisplay] = useState(false)
  const {data,loading,error} = useGetTasksAdminQuery({variables:{skip:null, limit:100}})
  const [deleteTaskMutation, {data: deleteData, loading: deleteLoad, error: deleteError}] = useDeleteTaskMutation()

  if(error?.message.includes("Access denied!"))
  {
    const closeHandler= () => {history.push('/login')}
        return(
          <Dialog onClose={closeHandler} open={true} >
              <p>Please login to continue.</p>
              <button onClick={closeHandler}>Close</button>
          </Dialog>
      );
  }

  function toggleForm() {
    setdisplay(!display);
  }
var i =1;
  return (
    <div className='tasks'>
      {i=1}
      <Header></Header>
      <div className='header'>
        <h1>TASKS</h1>
        <button onClick={toggleForm}>ADD TASKS</button>
        <div className='form-ctn'>
          {display ? <TaskForm toggleForm={toggleForm} /> : null}
        </div>
      </div>
      <div className='task-lists'>
        <ul>
          {
            data?.getTasks.map(el => {
              return(
                    <li>
                      <div className='task-items'>
                        <p>{i++}</p>
                        <p>{el.brief}</p>
                        <p>SUBMISSIONS: {el.taskReviewsCount}</p>
                      </div>
                      <button onClick={async () => {
                        await deleteTaskMutation({variables: {taskid: el.id}})
                        if(deleteData) window.location.reload()
                        if(deleteError || !deleteData)
                        {
                          const closeHandler = () => {window.location.reload()}
                          return(
                              <Dialog onClose={closeHandler} open={true}>
                                <p>Error occured</p>
                                <button onClick={closeHandler}>Close</button>
                            </Dialog>
                          )
                        }
                      }}>Delete task</button>
                  </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default AdminTasks
