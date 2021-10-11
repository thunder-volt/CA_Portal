import React from 'react'
import ReactMde from 'react-mde'
import { useState } from 'react'
import * as Showdown from 'showdown'
import 'react-mde/lib/styles/css/react-mde-all.css'
import './TaskForm.css'
import { TaskInput, useCreateTaskMutation } from './generated'
import {Dialog} from "@material-ui/core"
import { useHistory } from 'react-router'

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
  const history = useHistory()
  const [name, setname] = useState('name')
  const [description, setdescription] = useState('description')
  const [deadline, setdeadline] = useState('')
  const [points, setpoints] = useState(40)
  const [selectedTab, setSelectedTab] = React.useState<'write' | 'preview'>(
    'write'
  )

  const [createTaskMutation, {data, loading, error}] = useCreateTaskMutation()
  const [taskInput, setTaskInput] = useState<TaskInput>()

  function handleChange() {
    props.toggleForm()
  }

 async function handleSubmit(e:any) {
    // alert('You have submitted the form')
    e.preventDefault()
    console.log(deadline)
    try 
    {
      await createTaskMutation({variables:{data: {brief: name!, details: description!, deadline: "2021/10/7", maxPoints: points!}}})
    }
    catch(e)
    {
      console.log(e)
    }
  }
  if(data?.createTask ==true)
      {
        console.log(data)
        const closeHandler = () => {window.location.reload()}
        return(
            <Dialog onClose={closeHandler} open={true}>
              <p>Task Added</p>
              <button onClick={handleChange}>Close</button>
          </Dialog>
        )
      }
  if(loading)
  {
    return (
      <Dialog open={true}>
        <p>Loading...</p>
      </Dialog>
    )
  }
if(error)
{
  const closeHandler = () => {window.location.reload()}
  return (
    <Dialog onClose={closeHandler} open={true}>
      <p>Some error occurred.</p>
      <button onClick={closeHandler}>Close</button>
    </Dialog>
  )
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
            // value={deadline}
            onChange={(e) => {
              setdeadline(e.target.value)
              console.log(deadline)
              // var date = e.target.value.split('-')
              // var t = date[0];
              // date[0] =  date[date.length-1];
              // date[date.length-1] = t;
              // setdeadline(date.join('/'))
            }}
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
