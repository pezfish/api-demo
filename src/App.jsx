import React, { useState } from "react";

import WeekDisplay from "./containers/WeekDisplay.jsx";
import { calculateWeek, previousWeek, nextWeek } from "./utils/date.js";

const App = () => {
  const [currDate, setCurrDate] = useState(new Date());

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handlePrevWeek = () => {
    const prev = previousWeek(currDate);

    setCurrDate(new Date(prev));
  };

  const handleNextWeek = () => {
    const next = nextWeek(currDate);

    setCurrDate(new Date(next));
  };

  return (
    <div>
      <header>
        <nav className="mainnav">
          <div>
            <label htmlFor="selectWeek">Select week to display</label>
            <input
              type="date"
              value={currDate.toISOString().slice(0, 10)}
              onChange={(e) =>
                setCurrDate(
                  e.target.value ? new Date(e.target.value) : new Date()
                )
              }
              id="selectWeek"
            />
          </div>
          <div>
            <button type="button" onClick={handlePrevWeek}>
              Previous Week
            </button>
            <button type="button" onClick={handleNextWeek}>
              Next Week
            </button>
          </div>
        </nav>
        <h1>Marvel comics released week of {formatDate(currDate)}</h1>
      </header>
      <main>
        <WeekDisplay week={calculateWeek(currDate)} />
      </main>
      <footer>
        <a href="http://marvel.com">Data provided by Marvel. © 2021 MARVEL</a>
      </footer>
    </div>
  );
};

export default App;
