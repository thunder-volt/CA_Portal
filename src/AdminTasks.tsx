/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './AdminTasks.css'
import Logo from './assests/ShaastraLogo.png'

function AdminTasks() {
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
        <button>ADD TASKS</button>
      </div>
      <div className='task-lists'>
        <ul>
          <li>
            <div className='task-item'>
              <p>TASK TITLE</p>
              <p>SUBMISSIONS: 12</p>
            </div>
          </li>
          <li>
            <div className='task-item'>
              <p>TASK TITLE</p>
              <p>SUBMISSIONS: 12</p>
            </div>
          </li>
          <li>
            <div className='task-item'>
              <p>TASK TITLE</p>
              <p>SUBMISSIONS: 12</p>
            </div>
          </li>
          <li>
            <div className='task-item'>
              <p>TASK TITLE</p>
              <p>SUBMISSIONS: 12</p>
            </div>
          </li>
          <li>
            <div className='task-item'>
              <p>TASK TITLE</p>
              <p>SUBMISSIONS: 12</p>
            </div>
          </li>
          <li>
            <div className='task-item'>
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
