import React, { Component } from 'react';
import './App.css';
import Data from './Data';
import Login from './Login';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: null,
      isLoggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(user) {
    this.setState({
      isLoggedIn: true,
      user: "Robert Spidle"
    })
  }

  handleLogout() {
    this.setState({
      isLoggedIn:false,
      user: null
    })
  }

  render() {
    
    let screen = null;
    if(this.state.isLoggedIn){
      screen = <Data logout={this.handleLogout} user={this.state.user}/>
    }
    else {
      screen = <Login login={this.handleLogin}/>
    }



    return (
      <div className="App">
        {screen}
      </div>
    );
  }
}

export default App;
