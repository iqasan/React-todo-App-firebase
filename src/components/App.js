import React, { Component,  } from 'react';
import Todo from './Todo';
import logo from '../logo.svg';


class App extends React.Component {
  render() {
    return (
    <div className="container">
    <div className="head">
       <img src={logo} className="App-logo" alt="logo" />
    </div>
      <Todo></Todo>
    </div>
    );
  }
}

export default App;
