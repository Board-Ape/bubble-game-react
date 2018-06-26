import React, { Component, Fragment } from 'react';
import Bubbles from '../Bubbles/Bubbles'

class BubbleContainer extends Component {
  render() {
    return(
      <Fragment>
       <Bubbles fallSpeed={this.props.fallSpeed}/>
      </Fragment>
    )
  }
}

export default(BubbleContainer)
