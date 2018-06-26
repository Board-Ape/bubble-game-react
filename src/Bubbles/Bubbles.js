import React, {Component, Fragment} from 'react';
import Dot from "../Dot/Dot";

class Bubbles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bubbles: []
    }
    this.dotClickHandler = this.dotClickHandler.bind(this)
  }

  createDot = () => {
    const diameter = Math.random() * 50
    const dot = {
      diameter,
      x: Math.random() * 100,
      y: 0
    }
    this.setState({
      bubbles: [...this.state.bubbles, dot]
    })
  }

  componentDidMount = () => {
    this.createDot()
    setInterval(this.createDot, 1000);
    this.moveBubble()
    setInterval(this.moveBubble, 100);
  }

  moveBubble = () => {
    let bubbles = this.state.bubbles;
    bubbles.map((bubble, key) => {
      bubbles[key].y = 2 + bubble.y
      if (bubbles[key].y >= 100) {
        bubbles.splice(key)
      }
    })
    this.setState({
      bubbles
    })
  }

  dotClickHandler = (key) => {
    console.log("test");
    let bubbles = this.state.bubbles;
    bubbles.splice(key)
    this.setState({
      bubbles
    })
  }

  render() {
    return(
      <div>
        <article id="playContainer" className="playContainer">
          <section id="playArea" className="playArea">
            {this.state.bubbles.map((bubble, key) =>
              <Dot
                key={key}
                diameter={bubble.diameter}
                x={bubble.x}
                y={bubble.y}
                onClick={()=>{alert("alert")}}
              />
            )}
          </section>
        </article>
      </div>
    )
  }
}

export default(Bubbles)
