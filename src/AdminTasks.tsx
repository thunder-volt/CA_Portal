/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from 'react'
import './AdminTasks.css'
import TaskForm from './TaskForm'
import Logo from './assests/ShaastraLogo.png'

function AdminTasks() {
  const [display, setdisplay] = useState(false)

  function toggleForm() {
    setdisplay(!display)
  }

  return (
    <div className='tasks'>
      <div className='navbar'>
        <img src={Logo} alt='logo' className='logo'></img>
        <div className='navbar-options'>
          <h3>SELECT CA'S</h3>
          <h3>TASKS</h3>
          <h3>MARK TASKS</h3>
          <h3>LOGOUT</h3>
        </div>
      </div>
      <div className='header'>
        <h1>TASKS</h1>
        <button onClick={toggleForm}>ADD TASKS</button>
        <div className='form-ctn'>
          {display ? <TaskForm toggleForm={toggleForm} /> : null}
        </div>
      </div>
      <div className='task-lists'>
        <ul>
          <li>
            <div className='task-items'>
              <p>TASK TITLE</p>
              <p>SUBMISSIONS: 12</p>
            </div>
          </li>
          <li>
            <div className='task-items'>
              <p>TASK TITLE</p>
              <p>SUBMISSIONS: 12</p>
            </div>
          </li>
          <li>
            <div className='task-items'>
              <p>TASK TITLE</p>
              <p>SUBMISSIONS: 12</p>
            </div>
          </li>
          <li>
            <div className='task-items'>
              <p>TASK TITLE</p>
              <p>SUBMISSIONS: 12</p>
            </div>
          </li>
          <li>
            <div className='task-items'>
              <p>TASK TITLE</p>
              <p>SUBMISSIONS: 12</p>
            </div>
          </li>
          <li>
            <div className='task-items'>
              <p>TASK TITLE</p>
              <p>SUBMISSIONS: 12</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AdminTasks
