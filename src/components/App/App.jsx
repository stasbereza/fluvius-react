import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Home from 'components/pages/Home';
import LoginForm from 'components/pages/LoginForm';
import Calendar from 'components/pages/Calendar';
import NotFound from 'components/pages/NotFound';
import './App.css';

export default class App extends Component {
  state = {
    fields: {},
  };

  updateInputValue = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue,
      }
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" render={props =>  <LoginForm {...props} />} />
            <Route path="/calendar" component={Calendar} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}
