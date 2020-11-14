import React, { Component } from 'react';
import Rps1 from './Images/rps-screenshots/rps-1.png';
import Rps2 from './Images/rps-screenshots/rps-2.png';
import Rps3 from './Images/rps-screenshots/rps-3.png';
import Rps4 from './Images/rps-screenshots/rps-4.png';
import Rps5 from './Images/rps-screenshots/rps-5.png';

class RPS extends Component {
    render() {
        return (
            <div>
                <h1 className="page">Rock, Paper, Scissors</h1>
                <p className="page github-link">
                    <a target ="_blank" rel="noreferrer" href="https://www.github.com/rysonshalvis/Rock-paper-scissors">Click here for the github link</a>
                </p>
                <p className="page trick-summary" >I created the game. A challenge I faced was getting it to work. I used an array of objects to 
                    store all the different tricks. I am just putting in filler words for now so don't judge.
                    I used React for this project. It was challenging because it was my first React Project.
                    Lorem ipsum, don't remember the rest.
                    I created the game. A challenge I faced was getting it to work. I used an array of objects to 
                    store all the different tricks. I am just putting in filler words for now so don't judge.
                    I used React for this project. It was challenging because it was my first React Project.
                    Lorem ipsum, don't remember the rest.
                </p>
                <div className="rps-image-gallery">
                    <div className="rps-image-container">
                        <h1>Play Rock, Paper, Scissors against the Computer.</h1>
                        <img src={Rps1} alt="Rps 1" />
                    </div>
                    <div className="rps-image-container">
                        <h1>Pick between Rock, Paper or Scissors to defeat your opponent!</h1>
                        <img src={Rps2} alt="Rps 2" />
                    </div>
                    <div className="rps-image-container">
                        <h1>Keep track of all of your stats like your total wins and your best streak.</h1>
                        <img src={Rps3} alt="Rps 3" />
                    </div>
                    <div className="rps-image-container">
                        <h1>An interactive rating system that lets you change your rating!</h1>
                        <img src={Rps4} alt="Rps 4" />
                    </div>
                    <div className="rps-image-container">
                        <h1>See every rating that has been submitted.</h1>
                        <img src={Rps5} alt="Rps 5" />
                    </div>
                </div>
            </div>
        );
    }
}

export default RPS;