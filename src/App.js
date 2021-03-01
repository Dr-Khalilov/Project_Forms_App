import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />;
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
