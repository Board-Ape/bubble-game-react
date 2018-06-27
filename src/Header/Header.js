import React, { Component } from 'react';
import BubbleContainer from '../BubbleContainer/BubbleContainer'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { score, fallSpeed, restartGame, updateSpeed } = this.props;
    return(
      <header id="scoreAndSpeedWrapper" className="scoreAndSpeedWrapper">
        <section className="scoreRestartContainer">
          <p id="scoreboard" className="scoreboard">
            Score:
            <span id="score" className="score">{score}</span>
          </p>
          <button className="restartButton" type="button" onClick={restartGame}>Restart</button>
        </section>
        <h1 className="gameTitle">Bubble Pop</h1>
        <input id="speedInput" className="speedInput" type="range" min="10" max="100" onInput={updateSpeed} />
        <p className="speedSliderLabel">
          Speed:
          <span id="speedDisplay" className="speedDisplay">{fallSpeed}</span>
        </p>
      </header>
    )
  }
}

export default Header;
