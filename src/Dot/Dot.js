import React,  { Component } from 'react';

class Dot extends Component {
  render() {
    const { diameter, x, y, counter, dotClickHandler } = this.props
    return(
      <div className="dot"  style={{
                              width: diameter,
                              height: diameter,
                              left: `${x}%`,
                              top: `${y}%`
                            }}
        onClick={()=>this.props.dotClickHandler(counter)}
      />
    )
  }
}

export default Dot;
