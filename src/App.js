import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './navbar/Header';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
