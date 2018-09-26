import React, { Component } from 'react';

import Routes from "./Routes";
import NavHeader from './components/layout/navbar/NavHeader';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader/> 
        <Routes/>
      </div>
    );
  }
}

export default App;
