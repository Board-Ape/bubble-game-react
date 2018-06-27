import React, { Component, Fragment } from 'react';
import './App.css';
import Header from '../Header/Header';
import BubbleContainer from '../BubbleContainer/BubbleContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fallSpeed: 55,
      score: 0
    }
  }

  restartGame() {
    window.location.reload()
  }

  updateSpeed = (event) => {
    let newSpeed = parseInt(event.target.value)
    this.setState({
      fallSpeed: newSpeed
    })
  }

  updateScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

  render() {
    return (
      <Fragment>
        <Header
          restartGame={this.restartGame}
          fallSpeed={this.state.fallSpeed}
          score={this.state.score}
          updateSpeed={this.updateSpeed}
        />
        <BubbleContainer
          fallSpeed={this.state.fallSpeed}
          updateScore={this.updateScore}
        />
      </Fragment>
    );
  }
}

export default App;
