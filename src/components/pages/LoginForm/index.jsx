import React, { Component } from 'react';
import PropTypes from "prop-types";

import './styles.css';

const INITIAL_STATE = {
  email: '',
  emailError: '',
  password: '',
  passwordError: '',
}

export default class LoginForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    onFormSubmit: () => {},
  };

  state = ({...INITIAL_STATE})

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value })
  };

  handleFormValidate = () => {
    let isError = false;
    const errors = {
      emailError: "",
      passwordError: ""
    };

    if (this.state.password.length < 6) {
      isError = true;
      errors.passwordError = "Password needs to be at least 6 characters long";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    this.setState({
      ...this.state,
      ...errors,
  });

    return isError;
  };

  handleFormSubmit = event => {
    event.preventDeafault();

    const fields = {
      ...this.state,
    };

    const error = this.handleFormValidate;

    if (!error) {

      this.props.onFormSubmit(fields);

      localStorage.setItem('email', this.state.email);
      localStorage.setItem('password', this.state.password);

      this.setState({ ...INITIAL_STATE });
    };
  };

  render() {
    const { email, password } = this.state;
    // console.log(this.state);
    console.log(this.props);
    return (
      <form className="LoginForm" onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email"
                 name="email"
                 value={email}
                 className="form-control"
                 id="exampleInputEmail1"
                 aria-describedby="emailHelp"
                 placeholder="Enter email"
                 onChange={this.handleInputChange}
          />
          <small>{this.state.email.indexOf("@") === -1 ? "Requires valid email" : ""}</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password"
                 name="password"
                 value={password}
                 className="form-control"
                 id="exampleInputPassword1"
                 placeholder="Password"
                 onChange={this.handleInputChange}
          />
          <small >{this.state.password.length < 6 ? "Password needs to be at least 6 characters long" : ""}</small>
        </div>
        <button type="submit" className="btn btn-primary">Log in</button>
      </form>
    );
  }
}
