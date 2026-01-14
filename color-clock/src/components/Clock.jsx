// src/components/Clock.jsx
import { useState, useEffect } from "react";
import { format } from "date-fns";  // date formatting
import "../css/clock.css";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div className="clock">
      <p>{format(time, "eeee, MMMM do yyyy, HH:mm:ss")}</p>
    </div>
  );
}
