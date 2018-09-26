// Navbar.js

import React, { Component } from 'react';

import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";

import './NavHeader.css';  

export default class NavHeader extends Component {

  constructor(props) {
    super(props);

  }

  goToLogin = () =>  {
    this.props.history.push('/')
  }

   selectName = () => {
    this.setState(() => {
        this.props.history.push('about');
    });
}

  goToUser = () => {
    this.props.history.push('/user')
  }

  render() {
    return (
        <div className="App">
          <Navbar fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Scratch</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>

           <ul className="nav navbar-nav navbar-right">
           <li role="presentation">
           <a  onClick={() => this.selectName()}>Home</a></li>
           <li role="presentation">
           <a onClick={() => this.goToLogin()}>Login</a>
           </li>
           </ul>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
  }
}