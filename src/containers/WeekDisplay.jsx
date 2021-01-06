import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Loading from "../components/Loading.jsx";

const WeekDisplay = () => {
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetch(
      "https://gateway.marvel.com:443/v1/public/comics?format=comic&dateRange=2021-01-06%2C2021-01-06&apikey=7329de7a0831325eb9e98255826941cf"
    )
      .then((res) => res.json())
      .then((res) => setBooks(res.data.results))
      .then(() => setLoaded(true));
  }, []);

  return (
    <div>
      <Loading loaded={loaded} />
      <Page data={books} />
    </div>
  );
};

const Page = ({ data }) => {
  const listItems = data.map((item) => <li key={item.id}>{item.title}</li>);

  return <ul>{listItems}</ul>;
};

Page.propTypes = {
  data: PropTypes.array,
};

export default WeekDisplay;
