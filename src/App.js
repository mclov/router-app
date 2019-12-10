import React, { Component } from 'react';
import Food from './Food';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Switch>
          <Route exact path='/food/:name' render={(routeParams) => <Food {...routeParams} />} />
          <Route render={() => <h1>404 Page Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
