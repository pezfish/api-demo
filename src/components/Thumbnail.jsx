import React from "react";
import PropTypes from "prop-types";

function Thumbnail({ imageData, alt = "" }) {
  return <img src={`${imageData.path}.${imageData.extension}`} alt={alt} />;
}

Thumbnail.propTypes = {
  imageData: PropTypes.shape({
    path: PropTypes.string,
    extension: PropTypes.string,
  }),
  alt: PropTypes.string,
};

export default Thumbnail;
