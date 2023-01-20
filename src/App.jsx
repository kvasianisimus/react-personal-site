import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home/index';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import Skills from './pages/skills';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/skills" component={Skills} />
      </Switch>
    </>
  );
}

export default App;
