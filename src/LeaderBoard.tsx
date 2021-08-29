import React from "react";
import Header from "./Header";
import "./LeaderBoard.css";
import profile from "./assets/demopic.jpg";

function LeaderBoard() {
  const [users, setUsers] = React.useState([
    {
      name: "USER NAME",
      points: 41,
      imageURL: "./assets/demopic.jpg",
    },
    {
      name: "USER NAME",
      points: 40,
      imageURL: "./assets/demopic.jpg",
    },
    {
      name: "USER NAME",
      points: 35,
      imageURL: "./assets/demopic.jpg",
    },
    {
      name: "USER NAME",
      points: 32,
      imageURL: "./assets/demopic.jpg",
    },
    {
      name: "USER NAME",
      points: 31,
      imageURL: "./assets/demopic.jpg",
    },
    {
      name: "USER NAME",
      points: 26,
      imageURL: "./assets/demopic.jpg",
    },
    {
      name: "USER NAME",
      points: 22,
      imageURL: "./assets/demopic.jpg",
    },
    {
      name: "USER NAME",
      points: 48,
      imageURL: "./assets/demopic.jpg",
    },
    {
      name: "USER NAME",
      points: 51,
      imageURL: "./assets/demopic.jpg",
    },
    {
      name: "USER NAME",
      points: 28,
      imageURL: "./assets/demopic.jpg",
    },
  ]);

  const [sortUsers, setSortUsers] = React.useState<
    { id: number; user: { name: string; points: number; imageURL: string } }[]
  >([]);

  React.useEffect(() => {
    let index = 4;
    setSortUsers(
      users
        .sort((a, b) => b.points - a.points)
        .slice(3, users.length)
        .map((user) => {
          return { id: index++, user: user };
        })
    );
  }, []);

  return (
    <>
      <Header />
      <div className="LeaderBoard">
        <h1>LEADER BOARD</h1>
        <div className="Leaderboard_toppers">
          <div className="card">
            <div className="imgBox">
              <img src={profile} alt="" />
              <span className="silver">2</span>
            </div>
            <h3>{users.sort((a, b) => b.points - a.points)[1].name}</h3>
            <p className="points">
              {users.sort((a, b) => b.points - a.points)[1].points} Points
            </p>
          </div>
          <div className="card">
            <div className="imgBox">
              <img src={profile} alt="" />
              <span className="gold">1</span>
            </div>
            <h3>{users.sort((a, b) => b.points - a.points)[0].name}</h3>
            <p className="points">
              {users.sort((a, b) => b.points - a.points)[0].points} Points
            </p>
          </div>
          <div className="card">
            <div className="imgBox">
              <img src={profile} alt="" />
              <span className="bronze">3</span>
            </div>
            <h3>{users.sort((a, b) => b.points - a.points)[2].name}</h3>
            <p className="points">
              {users.sort((a, b) => b.points - a.points)[2].points} Points
            </p>
          </div>
        </div>
        <ul className="Leaderboard_container">
          {sortUsers.map((user) => {
            return (
              <li>
                <div className="left">
                  <p>{user.id}</p>
                  <img src={profile} alt="" />
                  <h4>{user.user.name}</h4>
                </div>
                <p className="points">{user.user.points} Points</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default LeaderBoard;
