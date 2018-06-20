import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import BubbleContainer from '../BubbleContainer/BubbleContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BubbleContainer />
      </div>
    );
  }
}

export default App;
