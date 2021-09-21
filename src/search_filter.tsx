import React from "react";
import "./search_filter.css";
import myFunction from "./search";
import { GetUsersFilter, useGetUsersQuery, UserRole } from "./generated";
import {Link} from "@chakra-ui/react"

function App() {
  const [filter, setFilter] = React.useState<GetUsersFilter>({coord: null, role: UserRole.Registered })
  const [skip,setSkip] = React.useState<number>()
  const [limit,setLimit] = React.useState<number>()

  const {data, loading, error} = useGetUsersQuery({
    variables: {
      filter: filter,
      Skip: skip,
      limit: limit,
    }
  })
  console.log(data)
  return (
    <div className="Body">
      <input
        type="text"
        id="myInput"
        onKeyUp={myFunction}
        placeholder="Search for CA.."
      />
      <table id="myTable">
        {
          data?.getUsers?.users.map(el => {
            console.log(el)
           return(
            <tr>
              <td><a href={`/application/${el.id}`}>{el.name}</a></td>
              <td>{el.caID}</td>
              <td>{el.email}</td>
              {/* <td>{el.questionnaire.college}</td> */}
            </tr>
           )
          })
        }
      </table>
    </div>
  );
}

export default App;
