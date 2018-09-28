import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import { httpLogin } from '+/app/config';

import "./Login.css";

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
   
    event.preventDefault();

    const user = {
        email: this.state.email,
        password: this.state.password
    };

    httpLogin.post(`/login`, user)
        .then(res => {
            sessionStorage.setItem('token', `Bearer ${res.data.token}`);
            this.props.history.push('/users')
        }).catch((error) => {
          if(error.response.status === 400){
              alert(error.response.data.error)
          }
      });
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
            Login
          </Button>
          <br/>
          <div className="col-md-12 text-center">
              <p>
              Inscreva-se Agora - <Link to='/signup'>Sign up</Link>
               </p>
          </div>
          
        </form>
      </div>
    );
  }
}