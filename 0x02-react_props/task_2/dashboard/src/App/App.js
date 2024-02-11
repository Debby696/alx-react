import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Login from "../Login/Login"
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className='App'>
      <Header />
      <Notifications />
      <Login />
      <Footer />
    </div>
  );
}

export default App;