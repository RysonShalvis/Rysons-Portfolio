import React from 'react';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Home from './Home'

class App extends React.Component {
  render() {
    return (
      
        <div className="App">
          <Router >
          <Header />
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={AboutMe} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/skills" exact component={Skills} />
          </Router>
        </div>
      
    );
  }
}

export default App;