import React, { useState } from "react";
import "./search_filter.css";
import myFunction from "./search";
import { GetUsersFilter, useGetUsersQuery, UserRole } from "./generated";
import {Link} from "@chakra-ui/react"
import Header from "./Header";

function App() {
  var [filter, setFilter] = React.useState<GetUsersFilter>({role: UserRole.Registered, coord: null})
  const [opt, setOption] = useState("")
  const [coord, setCoord] = useState("")

  const {data, loading, error} = useGetUsersQuery({
    variables: {
      filter: filter,
    }
  })
  const roleHandler = (e:any) => {
    setOption(e.target.value)
    switch(e.target.value)
    {
      case 'R': setFilter({ role: UserRole.Registered}); break;
      case 'S': setFilter({role: UserRole.Selected}); break;
      case 'r': setFilter({ role: UserRole.Rejected});
    }
  }
  const coordHandler = (e:any) => {
    setCoord(e.target.value)
    setFilter({coord: e.target.value, role: UserRole.Selected})
  }
  var i = 1;
  console.log(data)
  return (
    <div className="Search-Filter-Body">
      {i=1}
      <Header/>
      <input
        type="text"
        id="myInput"
        onKeyUp={myFunction}
        placeholder="Search for CA.."
      />
      <select name="" id="role" onChange={roleHandler}>
        <option value="R">Registered</option>
        <option value="S">Selected</option>
        <option value="r">Rejected</option>
      </select>
      {
        opt==='S' ? 
        <select name="" id="coord" onChange={coordHandler}>
            <option value="0">Choose coord</option>
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
      </select> : null
      }
      <table id="myTable">
        {
          // filter === 'R' ? data?.getUsers?.users.map(
          //   el => {
          //     var i = 1;
          //     return(
          //      <tr>
          //        <td>{i++}</td>
          //        <td><a href={`/application/${el.id}`}>{el.name}</a></td>
          //        <td>{el.caID}</td>
          //        <td>{el.email}</td>
          //      </tr>
          //     )
          //    }
          // ) : 
          // data?.getUsers?.users.map(el => {
          //  var i = 1;
          //  return(
          //   <tr>
          //     <td>{i++}</td>
          //     <td><a href={`/application/${el.id}`}>{el.name}</a></td>
          //     <td>{el.caID}</td>
          //     <td>{el.email}</td>
          //   </tr>
          //  )
          // })
        }
        {
          data?.getUsers?.users.map(el => {
            console.log(el)
           return(
            <tr>
              <td>{i++}</td>
              <td><a href={`/application/${el.id}`}>{el.name}</a></td>
              <td>{el.caID}</td>
              <td>{el.email}</td>
            </tr>
           )
          })
        }
      </table>
    </div>
  );
}

export default App;
