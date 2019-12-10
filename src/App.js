import React, { Component } from 'react';
import Food from './Food';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Route exact path='/food/:name' render={(routeParams) => <Food {...routeParams} />} />
      </div>
    );
  }
}

export default App;
