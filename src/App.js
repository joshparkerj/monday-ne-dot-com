import React, { Component } from 'react';

import './App.css';
import './components/TopNavBar/TopNavBar'
import TopNavBar from './components/TopNavBar/TopNavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
          Home
          <TopNavBar>
            
          </TopNavBar>

      </div>
    );
  }
}

export default App;
