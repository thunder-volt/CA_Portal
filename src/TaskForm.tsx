import React from 'react'
import ReactMde from 'react-mde'
import { useState } from 'react'
import * as Showdown from 'showdown'
import 'react-mde/lib/styles/css/react-mde-all.css'
import './TaskForm.css'

interface FuncProps {
  toggleForm: () => void
}

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
})

function TaskForm(props: FuncProps) {
  function handleSubmit() {
    alert('You have submitted the form')
  }

  const [name, setname] = useState('name')
  const [description, setdescription] = useState('description')
  const [deadline, setdeadline] = useState('')
  const [points, setpoints] = useState(40)
  const [selectedTab, setSelectedTab] = React.useState<'write' | 'preview'>(
    'write'
  )

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
          <ReactMde
            value={description}
            onChange={setdescription}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
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
