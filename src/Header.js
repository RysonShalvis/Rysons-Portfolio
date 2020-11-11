import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
        
                <header className="header-container">
                    <Link to='/'>
                        <h1 className="nav-item">Home</h1>
                    </Link>
                    <Link to='/about'>
                        <h1 className="nav-item">About Me</h1>
                    </Link>
                    <Link to='/projects'>
                        <h1 className="nav-item">Projects</h1>
                    </Link>
                    <Link to='/skills'>
                        <h1 className="nav-item">Skills</h1>
                    </Link>
                </header>
            
        );
    }
}

export default Header;