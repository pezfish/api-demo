import React from "react";
import PropTypes from "prop-types";

function Loading({ loaded = false }) {
  return loaded ? null : <h1>loading...</h1>;
}

Loading.propTypes = {
  loaded: PropTypes.bool,
};

export default Loading;
