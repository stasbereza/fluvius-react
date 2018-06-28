import React, { Component } from 'react';
import Header from 'components/Header';
import LoginForm from 'components/LoginForm';
// import Calendar from 'components/Calendar';
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
          <LoginForm onFormSubmit={this.updateInputValue} />
          {/* <Calendar /> */}
          <p>
          </p>
        </div>
      </div>
    );
  }
}
