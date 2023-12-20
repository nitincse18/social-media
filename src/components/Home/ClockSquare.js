import React, { useState, useEffect } from 'react';

const ClockSquare = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  const formattedTime = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedDate = dateTime.toLocaleString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className='w-56 h-56 flex flex-col items-center justify-center rounded-sm text-red-700 font-bold text-md'
      style={{
        backgroundImage: 'url("https://i.pinimg.com/originals/20/94/ed/2094edfaf2c5ba201fff23f047d20c2f.gif")',
      }}
    >
      <div className='m-1'>{formattedTime}</div>
      <div className='m-1'>{formattedDate}</div>
    </div>
  );
};

export default ClockSquare;
