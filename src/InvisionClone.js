import React, { Component } from 'react';
import invision1 from './Images/invision-clone-screenshots/invision-1.png';
import invision2 from './Images/invision-clone-screenshots/invision-2.png';
import invision3 from './Images/invision-clone-screenshots/invision-3.png';
import invision4 from './Images/invision-clone-screenshots/invision-4.png';
import invision5 from './Images/invision-clone-screenshots/invision-5.png';

class InvisionClone extends Component {
    render() {
        return (
            <div>
                <h1 className="page">Invision Clone</h1>
                <p className="page github-link">
                    <a target ="_blank" rel="noreferrer" href="https://www.github.com/rysonshalvis/invision-clone">Click here for the github link</a>
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
                <div className="invision-image-gallery">
                    <div className="invision-image-container">
                        <h1>A clone of the front page of <a target="_blank" rel="noreferrer" href="https://www.invisionapp.com">www.invisionapp.com</a></h1>
                        <img src={invision1} alt="invision 1" />
                    </div>
                    <div className="invision-image-container">
                        
                        <img src={invision2} alt="invision 2" />
                    </div>
                    <div className="invision-image-container">
                        
                        <img src={invision3} alt="invision 3" />
                    </div>
                    <div className="invision-image-container">
                        
                        <img src={invision4} alt="invision 4" />
                    </div>
                    <div className="invision-image-container">
                        
                        <img src={invision5} alt="invision 5" />
                    </div>
                </div>
            </div>
        );
    }
}

export default InvisionClone;