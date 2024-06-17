import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2024-09-26T00:00:00`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white text-center p-2 rounded-b-3xl  bg-[#E41FAE]">
      <h2 className="text-2xl md:text-4xl font-bold">Dia de elecciones</h2>
      <div className="text-lg md:text-2xl">
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{timeLeft.seconds}s 
      </div>
    </div>
  );
};

export default Countdown;