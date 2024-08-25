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
    <>
      <div data-aos="fade-up" className="relative">
        <div className="text-white text-center w-full md:w-full lg:w-2/4 p-4 rounded-b-full bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] ml-0 md:ml-0 lg:ml-10 absolute top-4 md:top-11 lg:top-12 justify-start animate-glow">
          <h2 className="text-2xl md:text-2xl lg:text-2xl font-bold">Día de elecciones</h2>
          <div className="text-xl md:text-2xl lg:text-2xl">
            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
          </div>
        </div>
      </div>


    </>
  );
};

export default Countdown;