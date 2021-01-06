import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Loading from "../components/Loading.jsx";
import Thumbnail from "../components/Thumbnail.jsx";

const WeekDisplay = ({ week }) => {
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
    fetch(
      `https://gateway.marvel.com:443/v1/public/comics?format=comic&dateRange=${week.start},${week.end}&apikey=7329de7a0831325eb9e98255826941cf`
    )
      .then((res) => res.json())
      .then((res) => setBooks(res.data.results))
      .then(() => setLoaded(true));
  }, [week.end]);

  return (
    <div>
      <Loading loaded={loaded} />
      <Page data={books} />
    </div>
  );
};

WeekDisplay.propTypes = {
  week: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string,
  }),
};

const Page = ({ data }) => {
  const listItems = data.map((item) => (
    <Thumbnail key={item.id} imageData={item.thumbnail} alt={item.title} />
  ));

  return <div className="booklist">{listItems}</div>;
};

Page.propTypes = {
  data: PropTypes.array,
};

export default WeekDisplay;
