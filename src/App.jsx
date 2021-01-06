import React, { useState } from "react";

import WeekDisplay from "./containers/WeekDisplay.jsx";
import { calculateWeek } from "./utils/date.js";

const App = () => {
  const [currDate, setCurrDate] = useState(new Date());

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <input
        type="date"
        value={currDate}
        onChange={(e) => setCurrDate(new Date(e.target.value))}
      />
      <h1>Marvel comics released week of {formatDate(currDate)}</h1>
      <WeekDisplay week={calculateWeek(currDate)} />
    </div>
  );
};

export default App;
