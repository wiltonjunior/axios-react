import React, { Component } from 'react';
import{BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './components/login/Login';
import TabContent from './components/tabs/TabContent';
import NavHeader from './components/layout/navbar/NavHeader';
import Footer from './components/layout/footer/Footer';
import Edit from './components/user/Edit';
import Add from './components/user/Add';

import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <NavHeader/> 
            <Route path="/" exact component={Login}/> 
            <Route path="/users" exact component={TabContent}/>
            <Route path="/users/:id" exact component={Edit}/>
            <Route path="/signup" exact component={Add}/>
            <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
