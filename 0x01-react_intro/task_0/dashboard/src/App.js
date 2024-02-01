import logo from './logo.svg';
import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <img src={process.env.PUBLIC_URL + '/holberton-logo.png'} alt="Holberton Logo" />
        <h1>School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </div>
    </div>
  );
}

export default App;
