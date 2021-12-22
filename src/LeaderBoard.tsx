import React from "react";
import Header from "./Header";
import "./LeaderBoard.css";
import profile from "./assets/profile.png";
import { useGetUserQuery, useGetUsersQuery, useLeaderBoardQuery, UserRole } from "./generated";
import Gold from "./gold.png"
import Silver from "./silver.png"
import Bronze from "./bronze.png"

function LeaderBoard() {
  const {data, loading, error} = useLeaderBoardQuery({variables: {limit:10, skip:null}})
  const {data: user, loading: usersLoad, error: usersError} = useGetUsersQuery({variables: {filter:{role: UserRole.Selected}}})
  

  var i = 0;
  var j=0;
  // var arr = data?.leaderBoard?.users.filter(el => el?.totalPoints !== null)
  // console.log(data?.leaderBoard?.users)
  var arr: any = []
  // arr = data?.leaderBoard?.users.map(el => {
  //   if(el.totalPoints === null) 
  //   {
  //     return({name: el.name, totalPoints: 0})

  //   }
  //   else return el;
  // })
  // arr = arr?.sort(function(a: any,b: any){return(b.totalPoints! - a.totalPoints!)})
  // console.log(arr)
  console.log(user?.getUsers?.users)
  arr = user?.getUsers?.users.map(el => {
    if(el.totalPoints === null) 
    {
      return({name: el.name, totalPoints: 0})

    }
    else return el;
  })
  console.log(arr)
  arr = arr?.sort(function(a: any,b: any){return(b.totalPoints! - a.totalPoints!)})
  arr = arr?.slice(0, 15)
  console.log(arr)
  // React.useEffect(() => {
  //   arr = users?.getUsers?.users.map(el => {
  //     if(el.totalPoints === null) 
  //     {
  //       return({name: el.name, totalPoints: 0})
  
  //     }
  //     else return el;
  //   })
  //   arr = arr?.sort(function(a: any,b: any){return(b.totalPoints! - a.totalPoints!)})
  //   arr = arr?.slice(0, 15)
  //   console.log(arr)
  // }, [])

  // data?.leaderBoard?.users.map(u => {
  //   if(u.totalPoints === null) i++;
  // })

  // i = arr.lenght() -1;
  return (
    <>
      {/* <Header />
      <div className="LeaderBoard">
        <h1>LEADER BOARD</h1>
        <div className="Leaderboard_toppers">
          <div className="card">
            <div className="imgBox">
              <img src={Silver} alt="" />
              <span className="silver">2</span>
            </div>
            {
              arr !== undefined &&
              arr[1] && <div>
                <h3>{arr[1].name}</h3>
              <p className="points">
                {arr[1].totalPoints} Points
              </p>
              </div> 
            }
          </div>
          <div className="card">
            <div className="imgBox">
              <img src={Gold} alt="" />
              <span className="gold">1</span>
            </div>
            {
               arr !== undefined &&
              arr[0] && <div>
                <h3>{arr[0].name}</h3>
              <p className="points">
                {arr[0].totalPoints} Points
              </p>
              </div> 
            }
          </div>
          <div className="card">
            <div className="imgBox">
              <img src={Bronze} alt="" />
              <span className="bronze">3</span>
            </div>
            {
               arr !== undefined &&
              arr[2] && <div>
                <h3>{arr[2].name}</h3>
              <p className="points">
                {arr[2].totalPoints} Points
              </p>
              </div> 
            }
          </div>
        </div>
        <ul className="Leaderboard_container">
          {
             arr !== undefined &&
          arr.map((user) => {
          i++;
            if(i>3 && user)
            return (
              <li>
                <div className="left">
                  <p>{i}</p>
                  <h4>{user.name}</h4>
                </div>
                <p className="points">{user.totalPoints} Points</p>
              </li>
            );
            else return null
          })}
        </ul>
      </div> */}
       <Header />
      <div className="LeaderBoard">
        <h1>LEADER BOARD</h1>
        <div className="Leaderboard_toppers">
          <div className="card">
            <div className="imgBox">
              <img src={Silver} alt="" />
              <span className="silver">2</span>
            </div>
            {
              arr !== undefined &&
              arr[1] && <div>
                <h3>{arr[1].name}</h3>
              <p className="points">
                {arr[1].totalPoints} Points
              </p>
              </div> 
            }
          </div>
          <div className="card">
            <div className="imgBox">
              <img src={Gold} alt="" />
              <span className="gold">1</span>
            </div>
            {
               arr !== undefined &&
              arr[0] && <div>
                <h3>{arr[0].name}</h3>
              <p className="points">
                {arr[0].totalPoints} Points
              </p>
              </div> 
            }
          </div>
          <div className="card">
            <div className="imgBox">
              <img src={Bronze} alt="" />
              <span className="bronze">3</span>
            </div>
            {
               arr !== undefined &&
              arr[2] && <div>
                <h3>{arr[2].name}</h3>
              <p className="points">
                {arr[2].totalPoints} Points
              </p>
              </div> 
            }
          </div>
        </div>
        <ul className="Leaderboard_container">
          {
            arr !== undefined &&
          arr.map((user: any) => {
          j++;
            if(j>3 && user)
            return (
              <li>
                <div className="left">
                  <p>{j}&nbsp;</p>
                  <h4>{user.name}</h4>
                </div>
                <p className="points">{user.totalPoints} Points</p>
              </li>
            );
            else return null
          })}
        </ul>
      </div>
    </>
  );
}

export default LeaderBoard;
