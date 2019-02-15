import React, { Component } from 'react';
import history from './history'
import './App.css';
import DashboardLanding from './views/dashboard/DashboardLanding';
import MyWeek from './components/MyWeek/myWeek';
import { ConnectedRouter } from 'connected-react-router';
import {Switch,Route} from 'react-router-dom';
import Marketing from './views/marketing/Marketing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedRouter history={ history }>
          <Switch>
            <Route path = '/marketing' component = {Marketing} />
            <Route path="/dashboard" component = {DashboardLanding} />        
            <Route component={Marketing} />
          </Switch>
        </ConnectedRouter>
      </div>

    );
  }
}

export default App;
