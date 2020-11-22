import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import axios from 'axios'

import Navigation from './components/navigation';
import Members from './components/members';

class App extends Component {

    componentDidMount() {
      //axios.get('/api/v1/say-something').then((res) => {
      //  const response = res.data;
      //  this.setState({response});
      //});
    }

  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/members" component={Members} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;