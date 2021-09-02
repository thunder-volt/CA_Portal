import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import Profile from "./Profile";
import Questionaire from "./Questionaire";
import Task from "./Task";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/questionaire" component={Questionaire} />
        <Route exact path="/leaderboards" component={LeaderBoard} />
        <Route exact path="/tasks" component={Task} />
      </Router>
    </div>
  )
}

export default App
