import React, {Component} from 'react';

class Bubbles extends Component {

  componentDidMount() {
    let fallSpeed = 55; // Mid speed as default
    const fallEvent = document.createEvent("Event");
    fallEvent.initEvent("fall", false, false); // Deprecated
    const playArea = document.getElementById("playArea");
    const scoreElem = document.getElementById("score");
    let score = 0;
    const width = playArea.clientWidth;
    const playAreaHeight = window.innerHeight - document.getElementById("scoreAndSpeedWrapper").offsetHeight;
    const pixel = "px";

    const createDot = function() {
      playArea.appendChild((new Dot(Math.random() * 50)).dotElement);
    }

    function updateScore(addedScore) {
      score += addedScore;
      scoreElem.textContent = score;
    }

    const fallEventFirer = function() {
      let dots = playArea.children;
      for( let i = 0; i < dots.length; i++)
      {
        dots[i].dispatchEvent(fallEvent);
      }
    }

    const fallEventHandler = function(e) {
      let newPos = this.offsetTop + fallSpeed/(Math.sqrt(fallSpeed));
        if (newPos + this.offsetHeight > playAreaHeight) {
          playArea.removeChild(this);
        } else {
          this.style.top = newPos + pixel;
        }
    }

    const dotClickHandler = function(e) {
      updateScore(Math.floor(100/this.offsetHeight))
      playArea.removeChild(this);
      setTimeout(createDot, 1000);
    }

    // Represents a dot
    function Dot(radius) {
      // minimum size 10px, maximum size 100px (diameter)
      if (radius < 5) radius = 5;
      else if (radius > 50) radius = 50;

      let diameter = radius*2
      let maxPosX = width - radius;
      // Dot Properties
      let xPos = Math.floor(Math.random() * (maxPosX-radius));
      let yPos = 0;

      // Create the actual element
      this.dotElement = document.createElement("div");
      this.dotElement.className = "dot";
      this.dotElement.style.height = diameter + pixel;
      this.dotElement.style.width = diameter + pixel;
      this.dotElement.style.left = xPos + pixel;
      this.dotElement.style.top = yPos + pixel;
      this.dotElement.addEventListener("click", dotClickHandler);
      this.dotElement.addEventListener("fall", fallEventHandler);
    }

    createDot();
    setInterval(createDot, 1000);
    setTimeout(function() {
      fallEventFirer();
      setInterval(fallEventFirer, 60);
    }, 500);
  }

  render() {
    return(
      <div>
        <article id="playContainer" className="playContainer">
          <section id="playArea" className="playArea">
          </section>
        </article>
      </div>
    )
  }
}

export default(Bubbles)
