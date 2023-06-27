import React, { useEffect, useState } from 'react';
import "../../sass/components/Datetime.scss";

const DateTimeComponent = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString();

  return (
    <div className="date-time-component">
      {/* <h1 className="date-time-title">Date and Time</h1> */}
      <p className="date-time">{formattedDateTime}</p>
    </div>
  );
};

export default DateTimeComponent;
