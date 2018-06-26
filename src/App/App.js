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

  updateScore = (addedScore) => {
    const scoreElem = document.getElementById("score");
    let newScore = this.state.score += addedScore
    this.setState({
      score: newScore
    })
    scoreElem.textContent = this.state.score;
  }

  render() {
    return (
      <Fragment>
        <Header
          restartGame={this.restartGame}
          updateSpeed={this.updateSpeed}
          updateScore={this.updateScore}
          fallSpeed={this.state.fallSpeed}
          score={this.state.score}
        />
        <BubbleContainer
          fallSpeed={this.fallSpeed}
        />
      </Fragment>
    );
  }
}

export default App;
