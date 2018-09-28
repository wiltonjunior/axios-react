// Navbar.js

import React, { Component } from 'react';

import { Link } from "react-router-dom";

import './NavHeader.css';  

export default class NavHeader extends Component {

  singUp() {
    sessionStorage.clear();
    //this.props.history.push('/');
  }

  render() {
    return (
        <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

    <Link className='navbar-brand' to='/users'>React Up</Link>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">

      </li>
      <li className="nav-item">
        <Link onClick={this.singUp} className='nav-link' to='/'>Login</Link>
      </li>
    </ul>

  </div>
</nav>
         </div>
      );
  }
}