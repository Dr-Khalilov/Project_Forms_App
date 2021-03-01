import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SignInForm from './components/forms/SignInForm';
import SignIn from './pages/SignIn';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={SignIn}/>
          {/* <Route path='/sign-in' component={} />; */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
