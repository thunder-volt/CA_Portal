import React from 'react'
import shaastraLogo from './assets/Shaastra_logo.png'
import { FaSearch, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './MarkTasks.css'

function MarkTasks() {
  const [header, setHeader] = React.useState(false)
  const [caName, setcaName] = React.useState('Campus Ambassaodar Name')
  const [coordName, setcoordName] = React.useState('')
  const [totalPoints, settotalPoints] = React.useState(0)
  const [points, setpoints] = React.useState(0)
  const [proof, setproof] = React.useState('')
  const [feedback, setfeedback] = React.useState('')
  const [task, settask] = React.useState('')

  return (
    <div className='mark-tasks'>
      <div className='navbar'>
        <Link to='/'>
          <img src={shaastraLogo} alt='' />
        </Link>
        <button onClick={() => setHeader(!header)}>
          <FaBars />
        </button>
        <ul className={header ? 'active' : ''}>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/tasks'>TASKS</Link>
          </li>
          <li>
            <Link to='/logout'>LOGOUT</Link>
          </li>
        </ul>
      </div>
      <div className='header'>
        <h1>MARK TASKS</h1>
        <div className='search-container'>
          <input className='search-bar' placeholder='Search for CA'></input>
        </div>
        <div className='menu-ctn'>
          <select
            name='coordName'
            id='coordName'
            onChange={(e: any) => setcoordName(e.target.value)}
            placeholder='Coordinator Name'
          >
            <option value='0'>COORD NAME</option>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
          </select>
          <select
            name='caName'
            id='caName'
            onChange={(e: any) => setcaName(e.target.value)}
            placeholder='Campus Ambassador'
          >
            <option value='0'>CAMPUS AMBASSADOR</option>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
          </select>
        </div>
      </div>
      <div className='task-lists'>
        <div className='list-header'>
          <p>{caName}</p>
          <p className='green-text'>TOTAL POINTS : {totalPoints}</p>
        </div>
        <table className='task-table'>
          <tr>
            <th>Tasks</th>
            <th>Proofs</th>
            <th>Points</th>
            <th>Feedback</th>
          </tr>
          <tr>
            <td>{task}</td>
            <td>{proof}</td>
            <td>
              <input
                value={points}
                name='points'
                placeholder='Points'
                onChange={(e: any) => setpoints(e.target.value)}
              ></input>
            </td>
            <td>
              <input
                type='text'
                value={feedback}
                name='feedback'
                onChange={(e: any) => setfeedback(e.target.value)}
                placeholder='Feedback'
              ></input>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MarkTasks
