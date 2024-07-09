import { useEffect, useState } from "react";

export function Clock(props: { name: string; code: string }) {
  const [time, setTime] = useState<null | number>();
  useEffect(() => {
    const currentTime = new Date().getTime();
    setTime(currentTime);
  }, []);
  return (
    <div>
      {props.name}
      <br />
      {props.code}
      {time};
    </div>
  );
}
