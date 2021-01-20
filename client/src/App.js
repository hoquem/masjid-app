
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/navigation';
import Members from './components/members';
import PrintOut from './components/printout';
import Login from './components/login';
import SearchTextProvider from './components/searchtextprovider';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Bury Park Masjid Membership App</h1>
    </div>
  );
};

/*
const withAuth = (Component) => {
  const AuthRoute = () => {
    const isAuth = !!localStorage.getItem("token");
    if (isAuth) {
      return <Component />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  return AuthRoute;
};
*/

class App extends Component {
  render() {
    return (
      <Router>
        <SearchTextProvider>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/PrintOut" component={PrintOut} />
          <Route exact path="/login" component={Login} />
        </Switch>
        </SearchTextProvider>
      </Router>
    );
  }
}

export default App;

