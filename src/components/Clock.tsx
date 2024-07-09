import { useEffect, useState } from "react";
import { toZonedTime, format } from "date-fns-tz";

export function Clock(props: { name: string; zone: string }) {
  const [time, setTime] = useState<string>("Getting time..");
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = toZonedTime(new Date(), props.zone);
      const displayTime = format(currentTime, "HH:mm:ss");
      setTime(displayTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [props.zone]);
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{time}</h3>
    </div>
  );
}
