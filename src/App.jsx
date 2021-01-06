import React, { useState } from "react";

import WeekDisplay from "./containers/WeekDisplay.jsx";
import { calculateWeek } from "./utils/date.js";

const App = () => {
  const [currDate, setCurrDate] = useState(new Date());

  return (
    <div>
      <input
        type="date"
        value={currDate}
        onChange={(e) => setCurrDate(e.target.value)}
      />
      <WeekDisplay week={calculateWeek(currDate)} />
    </div>
  );
};

export default App;
