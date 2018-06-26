import React,  { Component } from 'react';

class Dot extends Component {

  // dotClickHandler = function(e) {
  //   (Math.floor(100/this.offsetHeight))
  //   playArea.removeChild(this);
  //   setTimeout(createDot, 1000);
  // }

  render() {
    const { diameter, x, y } = this.props
    return(
      <div className="dot"  style={{
        width: diameter,
        height: diameter,
        left: `${x}%`,
        top: `${y}%`
      }}/>
    )
  }
}

export default Dot
