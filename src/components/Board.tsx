import React from "react";
import { Clock } from "./Clock";

export function Board() {
  type Clock = {
    name: string;
    code: string;
  };

  const clocks: Clock[] = [
    { name: "Sweden", code: "SWE" },
    { name: "England", code: "ENG" },
    { name: "Australia", code: "AUS" },
  ];
  return (
    <>
      {clocks.map((clock) => {
        return (
          <>
            <Clock name={clock.name} code={clock.code} />
          </>
        );
      })}
    </>
  );
}
