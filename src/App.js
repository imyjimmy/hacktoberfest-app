import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hactoberfest <a href="https://github.com/imyjimmy/hacktoberfest-app">Repo</a>. I will approve all PR's*.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>* as long as they don't break deployment</div>
    </div>
  );
}

export default App;
