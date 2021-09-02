import React from 'react'
import Logo from './assests/ShaastraLogo.png'
import { FaSearch } from 'react-icons/fa'
import './MarkTasks.css'

function MarkTasks() {
  return (
    <div className='mark-tasks'>
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
        <h1>MARK TASKS</h1>
        <div className='search-container'>
          <input className='search-bar' placeholder='Search for CA'></input>
        </div>
        <div className='menu-ctn'>
          <select>
            <option value='0'>COORD NAME</option>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
          </select>
          <select>
            <option value='0'>CAMPUS AMBASSADOR</option>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
          </select>
        </div>
      </div>
      <div className='task-lists'>
        <ul>
          <li>
            <div className='list-header'>
              <p>CAMPUS AMBASSADOR NAME</p>
              <p className='green-text'>TOTAL POINTS : 60</p>
            </div>
          </li>
          <li>
            <div className='task-item'>
              <p>TASK TITLE</p>
              <p className='yellow-text'>NOT REVIEWED</p>
            </div>
          </li>
          <li>
            <div className='task-item'>
              <p>TASK TITLE</p>
              <p className='green-text'>POINTS: 20</p>
            </div>
          </li>
          <li>
            <div className='task-item'>
              <p>TASK TITLE</p>
              <p className='green-text'>POINTS: 20</p>
            </div>
          </li>
          <li>
            <div className='task-item'>
              <p>TASK TITLE</p>
              <p className='green-text'>POINTS: 20</p>
            </div>
          </li>
          <li>
            <div className='task-item'>
              <p>TASK TITLE</p>
              <p className='green-text'>POINTS: 20</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MarkTasks
