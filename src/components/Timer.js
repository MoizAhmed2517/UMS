import React, { useState, useEffect } from 'react';

const Timer = () => {

  const [timeRemaining, setTimeRemaining] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);


const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div>
        {timeRemaining >= 0 ? `Remaining: ${formattedTime}` : 'Time Up!' }
    </div>
  )
}

export default Timer