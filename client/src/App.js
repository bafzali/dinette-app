
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ballot from "./pages/Ballot";
import LogIn from "./pages/LogIn";
import Search from "./pages/Search";
import User from "./pages/User";
import SignUp from "./pages/SignUp";
import Roulette from "./pages/Roulette";
import Account from "./pages/Account";
import JoinVote from "./pages/JoinVote";
import './App.css';
// import logo from './logo.svg';
const axios = require("axios");

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    axios.get('/auth/user').then(response => {
      console.log(`response data: ${response.data}`)
      if (!!response.data.user) {
        console.log('THERE IS A USER')
        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      } else {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/auth/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/Ballot" component={Ballot} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/Search" component={Search} />
          <Route path="/User" component={User} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Roulette" component={Roulette} />
          <Route path="/Account" component={Account} />
          <Route path="/JoinVote" component={JoinVote}/>
        </div>
      </Router>
    )
  }
}

export default App;