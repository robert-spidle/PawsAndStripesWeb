import React, { Component } from 'react';
import './App.css';
import Data from './Data';
import Login from './Login';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      userName: "",
      user: null,
      isLoggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(user) {
    this.setState({
      isLoggedIn: true,
      userName: user.name
    })
  }

  handleLogout() {
    window.sessionStorage.removeItem('oauth2_tr::http://localhost:3000::197907029127-nq1q9d614of0orumn23pkaq6una1n4sa.apps.googleusercontent.com::_tr_');
    this.setState({
      isLoggedIn:false,
      user: null,
      userName: ""
    })
  }

  render() {
    
    let screen = null;
    if(this.state.isLoggedIn){
      screen = <Data logout={this.handleLogout} user={this.state.user} userName={this.state.userName}/>
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
