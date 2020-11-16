import React, { Component } from 'react';
import trick1 from './Images/Trick-creator-screen-shots/Trick-screen-1.png';
import trick2 from './Images/Trick-creator-screen-shots/Trick-screen-2.png';
import trick3 from './Images/Trick-creator-screen-shots/Trick-screen-3.png';
import trick4 from './Images/Trick-creator-screen-shots/Trick-screen-4.png';
import trick5 from './Images/Trick-creator-screen-shots/Trick-screen-5.png';
import trick6 from './Images/Trick-creator-screen-shots/Trick-screen-6.png';

class TrickCreator extends Component {
    render() {
        return (
            <div>
                <h1 className="page">Trick Creator</h1>
                <p className="page github-link">
                    <a target ="_blank" rel="noreferrer" href="https://www.github.com/rysonshalvis/move-creator">Click here for the github link</a>
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
                <div className="trick-image-gallery">
                    <div className="trick-image-container">
                        <h1 className="image-text" >The goal of the game is to create every possible trick combination.</h1>
                        <img src={trick1} alt="trick 1" />
                    </div>
                    <div className="trick-image-container">
                        <h1 className="image-text" >Here we are combining a 180 with a 180. What will it make?</h1>
                        <img src={trick2} alt="trick 2" />
                    </div>
                    <div className="trick-image-container">
                        <h1 className="image-text" >A 360 was created! It also shows us we have 27 tricks left to create.</h1>
                        <img src={trick3} alt="trick 3" />
                    </div>
                    <div className="trick-image-container">
                        <h1 className="image-text" >Here we are choosing a sideflip as our first trick</h1>
                        <img src={trick4} alt="trick 4" />
                    </div>
                    <div className="trick-image-container">
                        <h1 className="image-text" >And we are using our newly created 360 as our second trick.</h1>
                        <img src={trick5} alt="trick 5" />
                    </div>
                    <div className="trick-image-container">
                        <h1 className="image-text" >A sideflip 360 has been created.</h1>
                        <img src={trick6} alt="trick 6" />
                    </div>
                </div>
            </div>
        );
    }
}

export default TrickCreator;