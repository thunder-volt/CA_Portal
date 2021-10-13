import React from 'react'
import user from './assets/profile.png'
import './Profile.css'
import Header from './Header'
import { useContext } from 'react'
import AuthContext from './utils/context'
import { useGetQuestionnaireQuery } from './generated'
import { useHistory } from 'react-router-dom'
import { Dialog, Box } from '@material-ui/core'

function Profile() {
  const { role } = useContext(AuthContext)
  const { data, error } = useGetQuestionnaireQuery()
  const history = useHistory()

  if (error) {
    if (error.message.includes('Access denied!')) {
      const closeHandler = () => {
        history.push('/login')
      }
      return (
        <Dialog onClose={closeHandler} open={true}>
          <p>Please login to continue.</p>
          <button onClick={closeHandler}>Close</button>
        </Dialog>
      )
    }
  //   if(!data)
  // {
  //   return(<p>fill form</p>)
  // }
  //   {
  //     const closeHandler = () => {
  //       history.push('/')
  //     }
  //     return (
  //       <Dialog onClose={closeHandler} open={true}>
  //         <p>Some error occurred.</p>
  //         <button onClick={closeHandler}>Close</button>
  //       </Dialog>
  //     )
  //   }
  }


  return (
    <>
      <Header />
      <div className='Profile'>
        <div className='Profile_details'>
          <div className='contentBox'>
            <h1>{localStorage.getItem('name')?.toLocaleUpperCase()}</h1>
            <p>{localStorage.getItem('email')?.toLocaleUpperCase()}</p>
            {
              data?.getQuestionnaire ? <p>
              {data?.getQuestionnaire.college.toLocaleUpperCase()},{' '}
              {data?.getQuestionnaire.state.toLocaleUpperCase()}
            </p> : <></>
            }
            {
              data?.getQuestionnaire ? <p>
              {data?.getQuestionnaire.pcity.toLocaleUpperCase()},{' '}
              {data?.getQuestionnaire.pstate.toLocaleUpperCase()} -{' '}
              {data?.getQuestionnaire.pincode.toLocaleUpperCase()}
            </p> : <a href="/questionaire">Fill the Questionnaire</a>
            }
          </div>
        </div>
        <p className='Profile_status'>
          APPLICATION STATUS : <span>{role.toLocaleUpperCase()}</span>
        </p>
        <div className='Profile_edit'>
          <form></form>
        </div>
      </div>
    </>
  )
}

export default Profile
