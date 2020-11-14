import React from 'react';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import TrickCreator from './TrickCreator';
import Home from './Home'
import InvisionClone from './InvisionClone';
import RPS from './RPS';

class App extends React.Component {
  render() {
    return (
      
        <div className="App">
          <Router >
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={AboutMe} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/projects/trick-creator" exact component={TrickCreator} />
            <Route path="/projects/invision-clone" exact component={InvisionClone} />
            <Route path="/projects/rock-paper-scissors" exact component={RPS} />
          </Router>
        </div>
      
    );
  }
}

export default App;
