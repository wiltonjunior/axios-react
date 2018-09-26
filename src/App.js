import React, { Component } from 'react';
import TabContent from './components/TabContent';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React</h1>
        </header>
        <TabContent />
      </div>
    );
  }
}

export default App;
