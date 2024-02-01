// task_1/dashboard/src/App.js
import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Holberton logo and School dashboard side by side */}
        <img src="/dashboard/holberton-logo.png" className="App-logo" alt="logo" />
        <div className="App-header-text">
          <h1>School dashboard</h1>
          <p>{getFooterCopy(true)}</p>
        </div>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(false)}`}</p>
      </footer>
    </div>
  );
}

export default App;
