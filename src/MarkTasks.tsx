import React from 'react'
import Logo from './assests/ShaastraLogo.png'
import { FaSearch } from 'react-icons/fa'
import './MarkTasks.css'
import { useState } from 'react'
import Header from "./Header"
import { GetUsersFilter, useGetTaskreviewQuery, useGetTasksQuery, useGetUsersQuery, UserRole} from "./generated";


function MarkTasks() {

  const [filter, setFilter] = React.useState<GetUsersFilter>({role: UserRole.Selected });
  const {data: tasks, loading: taskLoad, error: taskError} = useGetTasksQuery({variables:{skip:null, limit:10000}})
  const {data, loading, error} = useGetUsersQuery({
    variables: {
      filter: filter,
    }
  })
  const taskCount = tasks?.getTasks.length

  return (
    <div className='mark-tasks'>
      <Header></Header>
      <div className='header'>
        <h1>MARK TASKS</h1>
        <div className='search-container'>
          <input className='search-bar' placeholder='Search for CA'></input>
        </div>
        <div className='menu-ctn'>
          <select name="coord" onChange={(e:any) => {setFilter({role: UserRole.Selected, coord: e.target.value})}}>
            <option value='0'>COORD NAME</option>
              <option value="Anshid">Anshid</option>
              <option value="Samrudha Lakshmi">Samrudha Lakshmi</option>
              <option value="Poojitha R">Poojitha R</option>
              <option value="Sukriti">Sukriti </option>
              <option value="Vishwa">Vishwa</option>
              <option value="Pavan Kumar">Pavan Kumar</option>
              <option value="Joshik Sravan">Joshik Sravan</option>
              <option value="Sadguru Sharan">Sadguru Sharan</option>
              <option value="Keerthana">Keerthana</option>
              <option value="Ankit">Ankit</option>
              <option value="Gokul Vijay">Gokul Vijay</option>
              <option value="Vinaykumar">Vinaykumar</option>
              <option value="Aditya">Aditya</option>
              <option value="Rahul Bumb">Rahul Bumb</option>
              <option value="Umesh">Umesh</option>
              <option value="Reethika">Reethika</option>
          </select>
          <select>
            <option value='0'>CAMPUS AMBASSADOR</option>
            { 
              data?.getUsers?.users.map(el => { console.log(el.name)
                return(<option value={el.id}>{el.name}</option>)})  
            }
          </select>
        </div>
      </div>
      {/* {
        tasks?.getTasks.map(el => {console.log(el.status)})
      } */}
      <div className='task-lists'>
        {
          data?.getUsers?.users.map(el => {
            return(
              <ul>
              <li>
                <div className='list-header'>
                  <p>{el.name}</p>
                  <p className='green-text'>TOTAL POINTS : {el.totalPoints}</p>
                </div>
              </li>
              {
                tasks?.getTasks.map(t => {
                  if(el.taskReviews.map(r => {
                    if(r.reviewID === t.id)
                    {
                      return(
                        <li>
                          <div className='task-item'>
                            <p>{t.brief}</p>
                            <p className='green-text'>POINTS: {r.points}</p>
                          </div>
                        </li>
                      )
                    }
                  }))
                  return(
                    <li>
                      <div className='task-item'>
                        <p>{t.brief}</p>
                        <p className='yellow-text'>NOT REVIEWED</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
            )
          })
        }
      </div>
    </div>
  )
}

export default MarkTasks
