// Notifications.js
import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem'; // Import the new component

const Notifications = () => {
  const btnStyle = {
    position: 'fixed',
    top: '1em',
    right: '1em',
    background: 'transparent',
    border: 'none',
  };

  const imgStyle = {
    width: '20px',
    height: '20px',
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem type='urgent' html={getLatestNotification()} />
      </ul>
      <button style={btnStyle} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
        <img src={close_icon} style={imgStyle} />
      </button>
    </div>
  );
};

export default Notifications;
