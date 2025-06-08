import React, { useEffect, useState } from 'react';

const TimeComponent = ({ start }) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    let interval;

    if (start) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval); 
  }, [start]);

  // Helper to format time
  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return <div className="text-xl font-mono">{formatTime(secondsElapsed)}</div>;
};

export default TimeComponent;
