// import React, {Component, Fragment} from 'react';
// import Dot from "../Dot/Dot";
//
// class Bubbles extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       bubbles: []
//     }
//   }
//
//   createDot = () => {
//     console.log("Create Dot");
//     // playArea.appendChild((new Dot(Math.random() * 50)).dotElement);
//     const diameter = Math.random() * 50
//     const dot = {
//       diameter,
//       x: Math.random() * 100,
//       y: 0
//     }
//     this.setState({
//       bubbles: [...this.state.bubbles, dot]
//     })
//   }
//
//   componentDidMount() {
//
//     let fallSpeed = 100; // Mid speed as default
//     const fallEvent = document.createEvent("Event");
//     // fallEvent.initEvent("fall", false, false); // Deprecated
//     const playArea = document.getElementById("playArea");
//     const scoreElem = document.getElementById("score");
//     let score = 0;
//     const width = playArea.clientWidth;
//     const playAreaHeight = window.innerHeight - document.getElementById("scoreAndSpeedWrapper").offsetHeight;
//     const pixel = "px";
//
//     // createDot = f() {
//     //   console.log("Create Dot");
//     //   // playArea.appendChild((new Dot(Math.random() * 50)).dotElement);
//     //   this.setState({
//     //     bubbles: [...this.state.bubbles, Math.random() * 50]
//     //   })
//     // }
//
//     function updateScore(addedScore) {
//       score += addedScore;
//       scoreElem.textContent = score;
//     }
//
//     // const fallEventFirer = function() {
//     //   let dots = playArea.children;
//     //   for( let i = 0; i < dots.length; i++)
//     //   {
//     //     dots[i].dispatchEvent(fallEvent);
//     //   }
//     // }
//
//     const fallEventHandler = function(e) {
//       let newPos = this.offsetTop + fallSpeed/(Math.sqrt(fallSpeed));
//         if (newPos + this.offsetHeight > playAreaHeight) {
//           playArea.removeChild(this);
//         } else {
//           this.style.top = newPos + pixel;
//         }
//     }
//
//     const dotClickHandler = function(e) {
//       (Math.floor(100/this.offsetHeight))
//       playArea.removeChild(this);
//       setTimeout(this.createDot, 1000);
//     }
//
//     // Represents a dot
//     function Dot(radius) {
//       // minimum size 10px, maximum size 100px (diameter)
//       if (radius < 5) radius = 5;
//       else if (radius > 50) radius = 50;
//
//       let diameter = radius*2;
//       let maxPosX = width - radius;
//       // Dot Properties
//       let xPos = Math.floor(Math.random() * (maxPosX-radius));
//       let yPos = 0;
//
//       // Create the actual element
//       this.dotElement = document.createElement("div");
//       this.dotElement.className = "dot";
//       this.dotElement.style.height = diameter + pixel;
//       this.dotElement.style.width = diameter + pixel;
//       this.dotElement.style.left = xPos + pixel;
//       this.dotElement.style.top = yPos + pixel;
//       this.dotElement.addEventListener("click", dotClickHandler);
//       // this.dotElement.addEventListener("fall", fallEventHandler);
//     }
//
//     // this.createDot();
//     // setInterval(this.createDot, 1000);
//     // setTimeout(function() {
//     //   let bubbles = this.state.bubbles;
//     //   bubbles.map((bubble, key) => {
//     //     bubbles[key].y = this.props.fallSpeed + bubble.y
//     //   })
//     //   // fallEventFirer();
//     //   // setInterval(fallEventFirer, 60);
//     // }, 500);
//     this.moveBubble(this.state.bubbles)
//   }
//
//   moveBubble = (bubbles) => {
//     if (bubbles) {
//       this.createDot();
//       setInterval(this.createDot, 1000);
//       setTimeout(function() {
//         let bubbles = bubbles;
//         bubbles.map((bubble, key) => {
//           bubbles[key].y = this.props.fallSpeed + bubble.y
//         })
//         // fallEventFirer();
//         // setInterval(fallEventFirer, 60);
//       }, 500);
//     }
//   }
//
//   render() {
//
//     return(
//       <div>
//         <article id="playContainer" className="playContainer">
//           <section id="playArea" className="playArea">
//             {this.state.bubbles.map(bubble =>
//               <Dot
//                 diameter={bubble.diameter}
//                 x={bubble.x}
//                 y={bubble.y}
//               />
//             )}
//           </section>
//         </article>
//       </div>
//     )
//   }
// }
//
// export default(Bubbles)
