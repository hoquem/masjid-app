
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/navigation';
import Members from './components/members';
//import Dashboard from './components/dashboard';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Bury Park Masjid Membership App</h1>
    </div>
  );
};


class App extends Component {

  render() {
    return (
      //<Dashboard/>
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/logout" component={Members} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
