import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
        
                <header>
                    <nav className="header-container">
                        <Link to='/'>
                            <h1 className="nav-item">Home</h1>
                        </Link>
                        <Link to='/about'>
                            <h1 className="nav-item">About Me</h1>
                        </Link>
                        <Link to='/projects'>
                            <h1 className="nav-item">Projects</h1>
                        </Link>
                        <Link to='/contact'>
                            <h1 className="nav-item">Contact me</h1>
                        </Link>
                    </nav>
                </header>
            
        );
    }
}

export default Header;