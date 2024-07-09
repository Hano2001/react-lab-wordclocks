import { useEffect, useState } from "react";
type Time = {
  seconds: number;
  minutes: number;
  hours: number;
};
export function Clock(props: { name: string; code: string }) {
  const [time, setTime] = useState<Time>({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const seconds = date.getSeconds();
      const minutes = date.getMinutes();
      const hours = date.getHours();
      setTime({ seconds: seconds, minutes: minutes, hours: hours });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {props.name}
      {time.hours}
      <span>:</span>
      {time.minutes}
      <span>:</span>
      {time.seconds}
      {props.code}
    </div>
  );
}
