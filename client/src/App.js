
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/navigation';
import Members from './components/members';
import PrintOut from './components/printout';
import SearchTextProvider from './components/searchtextprovider';
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
        <SearchTextProvider>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/PrintOut" component={PrintOut} />
        </Switch>
        </SearchTextProvider>
      </Router>
    );
  }
}

export default App;
