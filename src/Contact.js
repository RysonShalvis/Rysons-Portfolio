import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <h1 className="page contact-info">Contact Me</h1>
                <h1 className="page contact-info">Ryson Shalvis</h1>
                <h1 className="page contact-info">phone: 801-831-9170</h1>
                <h1 className="page contact-info">email: rysonshalvis@gmail.com</h1>
                <h1 className="page contact-info">Linkedin: <a target="_blank" href="https://www.linkedin.com/in/ryson-shalvis-690b2a1b5">www.linkedin.com/in/ryson-shalvis-690b2a1b5</a></h1>
                <h1 className="page contact-info">Github: <a target="_blank" href="https://www.github.com/rysonshalvis">www.github.com/rysonshalvis</a></h1>
                <h1 className="page contact-info">CodeWars: <a target="_blank" href="https://www.codewars.com/users/RysonShalvis">www.codewars.com/users/RysonShalvis</a></h1>
            </div>
        );
    }
}

export default Contact;