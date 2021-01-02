
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/navigation';
import Members from './components/members';
//import Dashboard from './components/dashboard';

class App extends Component {

  render() {
    return (
      //<Dashboard/>
      <Router>
        <div>
          <Navigation />
          <Route exact path="/members" component={Members} />
        </div>
      </Router>
    );
  }
}

export default App;
