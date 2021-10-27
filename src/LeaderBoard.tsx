import React from "react";
import Header from "./Header";
import "./LeaderBoard.css";
import profile from "./assets/profile.png";
import { useLeaderBoardQuery } from "./generated";
import Gold from "./gold.png"
import Silver from "./silver.png"
import Bronze from "./bronze.png"

function LeaderBoard() {
  const {data, loading, error} = useLeaderBoardQuery({variables: {limit:10, skip:null}})
  

  var i =0;
  console.log(data?.leaderBoard?.users)
  return (
    <>
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
              data?.leaderBoard?.users[1] && <div>
                <h3>{data?.leaderBoard?.users[1].name}</h3>
              <p className="points">
                {data?.leaderBoard?.users[1].totalPoints} Points
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
              data?.leaderBoard?.users[0] && <div>
                <h3>{data?.leaderBoard?.users[0].name}</h3>
              <p className="points">
                {data?.leaderBoard?.users[0].totalPoints} Points
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
              data?.leaderBoard?.users[2] && <div>
                <h3>{data?.leaderBoard?.users[2].name}</h3>
              <p className="points">
                {data?.leaderBoard?.users[2].totalPoints} Points
              </p>
              </div> 
            }
          </div>
        </div>
        <ul className="Leaderboard_container">
          {
          data?.leaderBoard?.users.map((user) => {
          i++;
            if(i>2 && user)
            return (
              <li>
                <div className="left">
                  <p>{i}</p>
                  {/* <img src={profile} alt="" /> */}
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
