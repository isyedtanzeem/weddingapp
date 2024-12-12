import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const WeddingCountdown = () => {
  const [countdown, setCountdown] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://13.60.64.94:8080/countdown')
      .then(response => {
        setCountdown(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching countdown:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="wedding-container">
      <h1 className="wedding-title">Our Wedding Countdown</h1>
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : countdown ? (
        <div>
          <div className="countdown-number">{countdown.daysRemaining}</div>
          <div className="countdown-text">Days</div>
          <div className="countdown-number">{countdown.hoursRemaining % 24}</div>
          <div className="countdown-text">Hours Left</div>
          {/* <p className="wedding-date">Date: {countdown.weddingDate}</p>
          <p className="wedding-time">Time: {countdown.weddingTime}</p> */}
        </div>
      ) : (
        <p>Unable to load countdown information.</p>
      )}
    </div>
  );
};

export default WeddingCountdown;
