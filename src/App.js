import React, { Component } from 'react';
import { Container } from 'react-bootstrap';


import { Route, Switch } from 'react-router-dom';
import PostList from './components/post_lists';
import Home from './components/home';
import Appbar from "./components/appbar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from './components/logout';
import Dashboard from './components/dashboard';

import ProtectedRoute from './components/common/protectedRoute';

import { getLoggedUser } from './utils/auth.js';

class App extends Component {

  state = {
    user : {}
  };

  componentDidMount(){

    const user = getLoggedUser();

    this.setState( { user } );
  };


  render(){
    const { user } = this.state;
    return (
      <React.Fragment>
        <Appbar user={user} />
        <Container className="pt-3">
          <Switch>
            <ProtectedRoute showOnUser={true} path='/logout' component={Logout} />
            <ProtectedRoute showOnUser={true} path='/dashboard' component={Dashboard} />
            <ProtectedRoute showOnUser={false} path='/register' component={RegisterForm} />
            <ProtectedRoute showOnUser={false} path='/login' component={LoginForm} />
            <Route path='/posts' component={PostList} />
            <Route path='/' exact render={(props) => <Home user={user} {...props} /> }/>
          </Switch>
        </Container>
      </React.Fragment>
    );

  }
}

export default App;
