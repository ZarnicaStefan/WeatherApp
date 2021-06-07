import React from 'react';
import SignUp from './Auth/signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LogIn from "../components/Auth/login"
import App from "../App"


function Authentication() {
  return(
    <Container className="d-flex align-items-center justify-content-center"
    style={{ minHeight: '100vh'}}>
    <div className="w-100" style={ {maxWidth: '400px'} }>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path='/' component={App} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
          </Switch>
        </AuthProvider>
      </Router>
      <SignUp />
    </div>
    </Container>
  )
}

export default Authentication