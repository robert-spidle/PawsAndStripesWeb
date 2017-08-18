import React from 'react';
import './App.css';
import GoogleLogin from 'react-google-login';
import SignInLogo from './google_button_icon.png';
import PawsLogo from './BlackWhiteLogoSmall1.png';

class Login extends React.Component{

    constructor(props){
        super(props);

        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle(response) {
        console.log(response);
        this.props.login(response.profileObj);
    }

    render(){
        return(
            <div className="Login">
                <link href="https://fonts.googleapis.com/css?family=Stardos+Stencil" rel="stylesheet"/>
                <div className="App-header">

                </div>
                <div className="Login-content">
                    <text className="Header-text">
                        Volunteer Login
                    </text>
                    <br />
                    <img src={PawsLogo} alt="https://cdn.greatnonprofits.org/images/logos/BlackWhiteLogoSmall1.png" className="Paws-logo-login" />
                    <GoogleLogin
                        clientId="197907029127-nq1q9d614of0orumn23pkaq6una1n4sa.apps.googleusercontent.com"
                        buttonText={<div className="Google-button"> 
                                        <img src={SignInLogo} alt="Google Logo" className='Google-logo'/> 
                                        <text className='Google-text'>Sign in with Google </text>
                                    </div>}
                        onSuccess={this.responseGoogle}
                        onFailure={this.props.login}
                        style={{
                            display: 'flex',
                            backgroundColor: '#4285F4', 
                            color: 'White',
                            minWidth: '300px',
                            maxWidth: '600px',
                            margin: '0 auto',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            borderRadius: '2px',
                            border: '1px solid transparent',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            fontFamily: 'Roboto', 
                            textAlign: 'center'
                            }}
                    >
                        
                    </GoogleLogin>
                    
                </div>
            </div>
        )
    }
}

export default Login;