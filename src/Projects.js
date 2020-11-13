import React, { Component } from 'react';
import trickPic from './Images/Trick-creator-screen-shots/Trick-screen-1.png';
import invisonPic from './Images/invision-clone-screenshots/invision-1.png';
import { Link } from 'react-router-dom';

class Projects extends Component {
    render() {
        return (
            <div>
                <h1 className="page">Projects Page</h1>
                <div className="projects image-gallery">
                    <div className="image-container">
                        <Link to="/projects/trick-creator">
                            <h1 className="image-text">Trick Creator</h1>
                            <img className="image" alt="trick-creator" src={trickPic} />
                        </Link>
                    </div>
                    <div className="image-container">
                        <Link to="/projects/invision-clone">
                            <h1 className="image-text">Invision Clone</h1>
                            <img className="image" alt="invison-clone" src={invisonPic} />
                        </Link>
                    </div>
                    <div className="image-container">
                        <Link to="/projects/rock-paper-scissors">
                            <h1 className="image-text">Rock, Paper, Scissors</h1>
                            <img className="image" alt="trick-creator" src={trickPic} />
                        </Link>
                    </div>
                    <div className="image-container">
                        <Link to="/projects/misc">
                            <h1 className="image-text">Miscellaneous</h1>
                            <img className="image" alt="trick-creator" src={trickPic} />
                        </Link>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Projects;