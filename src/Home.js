import React, { Component } from 'react';
import me from './Images/me/ME.jpg'

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <img className="me page" alt="me" src={me} />
                <div className="summary-container">
                    <h1 className="page">Summary</h1>
                    <p className="page home-summary">Hello, My Name is Ryson Shalvis. I am a Web Developer and my main focus
                        is JavaScript and React.
                        I am also comfortable with CSS3 and HTML5. I learned to code using Codecademy and the help of friends.
                        For the
                        last six months, I have coded every chance I get; At work during lunch and on breaks, as soon as I 
                        get home up until bed time, and any free time I get. I have sacrifced many hours and fun actvities 
                        to get a job I love doing! I will get frustrated and stuck on something and it can be a real pain, 
                        but when I solve the problem, fix the bug, or finish the project, it makes it all worth it in the end!
                        I have a real passion for coding and Web Development and I will make a great addition to your team!
                    </p>
                </div>
               
            </div>
        );
    }
}

export default Home;