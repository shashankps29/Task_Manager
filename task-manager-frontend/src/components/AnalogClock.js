import React, { useEffect, useState } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds() * 6;
  const minutes = time.getMinutes() * 6 + seconds / 60;
  const hours = (time.getHours() % 12) * 30 + minutes / 12;

  const numbers = [];
  for (let i = 1; i <= 12; i++) {
    const angle = (i / 12) * 360;
    const x = 80 + 65 * Math.sin((angle * Math.PI) / 180);
    const y = 85 - 65 * Math.cos((angle * Math.PI) / 180);

    numbers.push(
      <div
        key={i}
        style={{
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
          color: "white",
          fontWeight: "bold",
          fontSize: "18px",
          transform: "translate(-50%, -50%)"
        }}
      >
        {i}
      </div>
    );
  }

  return (
    <div
      style={{
        width: "180px",
        height: "180px",
        borderRadius: "50%",
        border: "6px solid white",
        position: "relative",
        marginLeft: "20px",
        marginTop: "20px",
        boxShadow: "0 0 15px rgba(255,255,255,0.3)"
      }}
    >
      {/* Numbers */}
      {numbers}

      {/* Hour Hand */}
      <div
        style={{
          position: "absolute",
          width: "5px",
          height: "45px",
          background: "white",
          top: "45px",
          left: "87px",
          transformOrigin: "bottom",
          transform: `rotate(${hours}deg)`,
          borderRadius: "6px"
        }}
      />

      {/* Minute Hand */}
      <div
        style={{
          position: "absolute",
          width: "3px",
          height: "60px",
          background: "white",
          top: "25px",
          left: "88px",
          transformOrigin: "bottom",
          transform: `rotate(${minutes}deg)`,
          borderRadius: "6px"
        }}
      />

      {/* Second Hand */}
      <div
        style={{
          position: "absolute",
          width: "2px",
          height: "70px",
          background: "red",
          top: "15px",
          left: "89px",
          transformOrigin: "bottom",
          transform: `rotate(${seconds}deg)`
        }}
      />
    </div>
  );
};

export default AnalogClock;
