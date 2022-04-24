import Clock from "../UI/Clock";
import { useState, useEffect } from "react";

function ClockNow() {
  const date = new Date();
  const [timeNow, setTimeNow] = useState(date);
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTimeNow(date);
    }, 1000);
  }, []);
  
  return (
    <Clock
      time={timeNow}
      numericTime={date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}
    />
  );
}
export default ClockNow;
