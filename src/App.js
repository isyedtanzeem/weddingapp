// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    // Set wedding date with specific time: August 29, 2025 at 5:30 PM
    const weddingDate = new Date('August 29, 2025 17:30:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="countdown-container">
      <div className="islamic-pattern-top"></div>
      <div className="islamic-pattern-bottom"></div>
      
      <div className="countdown-card">
        <div className="crescent-moon">
          <div className="star"></div>
        </div>
        
        <div className="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
        
        <h1 className="wedding-title">Our Wedding</h1>
        
        <div className="islamic-divider">
          <div className="divider-line"></div>
          <div className="divider-symbol">❖</div>
          <div className="divider-line"></div>
        </div>
        
        <div className="wedding-date">
          <p>August 29, 2025</p>
          <p className="wedding-time">5:30 PM</p>
        </div>
        
        <div className="timer-container">
          <div className="timer-box green">
            <div className="timer-value">{timeLeft.days}</div>
            <div className="timer-label">Days</div>
          </div>
          <div className="timer-box gold">
            <div className="timer-value">{timeLeft.hours}</div>
            <div className="timer-label">Hours</div>
          </div>
          <div className="timer-box emerald">
            <div className="timer-value">{timeLeft.minutes}</div>
            <div className="timer-label">Minutes</div>
          </div>
          <div className="timer-box teal">
            <div className="timer-value">{timeLeft.seconds}</div>
            <div className="timer-label">Seconds</div>
          </div>
        </div>
        
        <div className="message-container">
          <p className="arabic-quote">ومن آياته أن خلق لكم من أنفسكم أزواجا لتسكنوا إليها وجعل بينكم مودة ورحمة</p>
          <p className="message">Waiting for our Nikah to say Alhamdulillah</p>
        </div>
        
        <div className="islamic-arch">
          <div className="arch"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
