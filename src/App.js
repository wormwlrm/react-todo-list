import React, { Component } from 'react';
import Header from './layout/Header';
import Content from './layout/Content';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
        <Content></Content>
      </div>
    )
  }
}

export default App;
