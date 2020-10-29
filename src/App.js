import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './navbar/Header';
import Home from './Home';
import About from './About';
import Footer from './Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About>Hacktoberfest happens on October, and what happens on October is Hacktobefest. This fest is hosted every year of October.</About>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
