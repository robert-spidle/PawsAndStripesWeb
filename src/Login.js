import React from 'react';
import './App.css';
import GoogleLogin from 'react-google-login';
import SignInLogo from './google_button_icon.png'

class Login extends React.Component{

    constructor(props){
        super(props);

        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle(response) {
        console.log(response);
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
                    <img src="https://cdn.greatnonprofits.org/images/logos/BlackWhiteLogoSmall1.png" alt="PawsAndStripes logo" className="Paws-logo-login" />
                    <GoogleLogin
                    clientId="857691639654-aot23kgou1ug73llupjeeqj7677hel1a.apps.googleusercontent.com"
                    buttonText={<div className="Google-button"> 
                                    <img src={SignInLogo} alt="Google Logo" className='Google-logo'/> 
                                    <text className='Google-text'>Sign in with Google </text>
                                </div>}
                    onSuccess={this.responseGoogle}
                    onFailure={this.props.login}
                    style={{
                        display: 'inline-block',
                        backgroundColor: '#4285F4', 
                        color: 'White',
                        minWidth: '200px',
                        maxWidth: '600px',
                        margin: '0 auto',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        borderRadius: '2px',
                        border: '1px solid transparent',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        fontFamily: 'Roboto', 
                        }}
                    >
                        
                    </GoogleLogin>
                    
                </div>
            </div>
        )
    }
}

export default Login;