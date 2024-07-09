import React, { FormEvent, useEffect, useState } from "react";
import { Clock } from "./Clock";

export function Board() {
  type Clock = {
    name: string;
    zone: string;
  };
  const clockArray: Clock[] = [
    { name: "Stockholm", zone: "Europe/Berlin" },
    { name: "Preston", zone: "Europe/Belfast" },
    { name: "Brisbane", zone: "Australia/Brisbane" },
    { name: "New York", zone: "America/New_York" },
  ];
  const [clocks, setClocks] = useState<Clock[]>(clockArray);

  function submitHandler(e: FormEvent) {
    e.preventDefault();

    setClocks([
      ...clocks,
      { name: e.target.name.value, zone: e.target.zone.value },
    ]);
  }

  return (
    <>
      <section className="section-board">
        {clocks.map((clock) => {
          return (
            <article className="clock">
              <Clock name={clock.name} zone={clock.zone} />
            </article>
          );
        })}
      </section>
      <section className="section-form">
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Location name:</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="zone">Timezone name: </label>
          <input type="text" name="zone" id="zone" />
          <button type="submit">Add clock</button>
        </form>
      </section>
    </>
  );
}
