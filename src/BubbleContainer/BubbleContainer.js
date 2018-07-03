import React, { Component } from 'react';
import Dot from "../Dot/Dot";

class BubbleContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bubbles: [],
      counter: 0
    }
  }

  componentDidMount = () => {
    this.createDot()
    setInterval(this.createDot, 1000);
    this.moveBubble()
    setInterval(this.moveBubble, 50);
  }

  createDot = () => {
    const diameter = Math.random() * 50
    const dot = {
      diameter,
      x: Math.random() * 96,
      y: 0,
      counter: this.state.counter
    }
    this.setState({
      bubbles: [...this.state.bubbles, dot],
      counter: this.state.counter + 1
    })
  }


  moveBubble = () => {
    let bubbles = this.state.bubbles;
    bubbles.map((bubble, key) => {
      bubbles[key].y = (this.props.fallSpeed/100)*2 + bubble.y
    })
    let filtered = bubbles.filter(bubble => {
      return bubble.y < 100
    })
    this.setState({
      bubbles: filtered
    })
  }

  dotClickHandler = (id) => {
    let bubbles = this.state.bubbles;
    let filtered = bubbles.filter(bubble => {
      return bubble.counter !== id
    })
    this.setState({
      bubbles: filtered
    })
    this.props.updateScore()
  }

  render() {
    return(
      <div>
        <article id="playContainer" className="playContainer">
          <section id="playArea" className="playArea">
            {this.state.bubbles.map((bubble) =>
              <Dot
                key={bubble.counter}
                diameter={bubble.diameter}
                x={bubble.x}
                y={bubble.y}
                counter={bubble.counter}
                dotClickHandler={this.dotClickHandler}
                updateScore={this.props.updateScore}
              />
            )}
          </section>
        </article>
      </div>
    )
  }
}

export default BubbleContainer;
