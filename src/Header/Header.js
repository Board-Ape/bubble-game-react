import React, {Component} from 'react';
import Bubbles from '../Bubbles/Bubbles'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fallSpeed: 55,
      score: 0
    }
    this.speedInput = React.createRef()
  }

  restartGame() {
    window.location.reload()
  }

  updateSpeed = () => {
    let newSpeed = parseInt(this.speedInput.current.value)
    this.setState({
      fallSpeed: newSpeed
    })
    document.getElementById("speedDisplay").textContent = this.state.fallSpeed;
  }

  updateScore = (addedScore) => {
    console.log("Update score")
    const scoreElem = document.getElementById("score");
    let newScore = this.state.score += addedScore
    this.setState({
      score: newScore
    })
    scoreElem.textContent = this.state.score;
  }

  render() {
    return(
      <header id="scoreAndSpeedWrapper" className="scoreAndSpeedWrapper">
        <section className="scoreRestartContainer">
          <p id="scoreboard" className="scoreboard">
            Score:
            <span id="score" className="score">{this.state.score}</span>
          </p>
          <button className="restartButton" type="button" onClick={this.restartGame}>Restart</button>
        </section>
        <h1 className="gameTitle">Bubble Pop</h1>
        <input id="speedInput" className="speedInput" ref={this.speedInput} type="range" min="10" max="100" onInput={this.updateSpeed} />
        <p className="speedSliderLabel">
          Speed:
          <span id="speedDisplay" className="speedDisplay">55</span>
        </p>
      </header>
    )
  }
}

export default(Header)
