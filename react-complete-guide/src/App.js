import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app </h1>
        <p>This is working </p>
        <Person/>
      </div>
    );
    //this is what the jsx is compile to 
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'this does work'));
  }
}

export default App;
