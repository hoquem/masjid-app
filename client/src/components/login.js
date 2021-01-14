import React, { Component, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import {GoogleLogin, GoogleLogout} from 'react-google-login';

class Login extends Component {
    state = {  };

    async signup(res) {
        try {
            const googleresponse = {
            displayName: res.profileObj.name,
            firstName: res.profileObj.givenName,
            lastName: res.profileObj.familyName,
            email: res.profileObj.email,
            googleId: res.googleId,
            image: res.profileObj.imageUrl,
            providerId: 'Google'
            };

    
            const result = await axios.post('auth/google', googleresponse);
            //let responseJson = result;
            sessionStorage.setItem("userData", JSON.stringify(result));
            this.props.history.push('/')
        } catch(e) {
            console.error(e);
        }
    }

    render() { 

 
        const responseGoogle = (response) => {
            console.log(response);
            setUser(response.profileObj);
            this.signup(response);
          }

          const handleLogoutSuccess = (response) => {
            console.log("Logout Success ", response);
            //setUser(null);
          }
         
          const handleLogoutFailure = error => {
            console.log("Logout Failure ", error);
          }

          return (
            <React.Fragment>
            <Container className="col-lg-4 col-md-4 col-sm-4 justify-content-center">
            <br/><br/>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Please login with your Google account</Card.Title>
                
                <Card.Text> 
                    <GoogleLogout
                      clientId={clientId}
                      onLogoutSuccess={handleLogoutSuccess}
                        onFailure={handleLogoutFailure}
                    />
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                    <GoogleLogin 
                        buttonText="Login with Google" 
                        clientId="677448856451-tf822n4ctpqtrro55q55j400j6iv3gft.apps.googleusercontent.com"
                        onFailure={responseGoogle} onSuccess={responseGoogle}
                    />
                    eact-google-login
                </Card.Text>
            </Card.Body>
            </Card>
            </Container>
            </React.Fragment>
      
      )
    }
}
 
export default Login;