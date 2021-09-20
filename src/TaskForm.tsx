import React from 'react'
import { useState } from 'react'
import './TaskForm.css'

interface FuncProps {
  toggleForm: () => void
}

function TaskForm(props: FuncProps) {
  function handleSubmit() {
    alert('You have submitted the form')
  }

  const [name, setname] = useState('name')
  const [description, setdescription] = useState('description')
  const [deadline, setdeadline] = useState('')
  const [points, setpoints] = useState(40)

  function handleChange() {
    props.toggleForm()
  }
  return (
    <div className='task-form'>
      <div className='top-ctn'>
        <p>ADD TASK</p>
        <button onClick={handleChange}>Close</button>
      </div>
      <form onSubmit={handleSubmit} className='main-form'>
        <div className='input-ctn'>
          <p>Name :</p>
          <input
            type='text'
            value={name}
            onChange={(e) => setname(e.target.value)}
          ></input>
        </div>
        <div className='input-ctn'>
          <p>Description :</p>
          <input
            type='text'
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></input>
        </div>
        <div className='input-ctn'>
          <p>Deadline :</p>
          <input
            type='date'
            value={deadline}
            onChange={(e) => setdeadline(e.target.value)}
          ></input>
        </div>
        <div className='input-ctn'>
          <p>Points :</p>
          <input
            type='number'
            value={points}
            onChange={(e) => setpoints(parseInt(e.target.value))}
          ></input>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default TaskForm
