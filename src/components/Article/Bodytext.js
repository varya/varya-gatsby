import React from "react";
import PropTypes from "prop-types";

const Bodytext = props => {
  const { html, theme } = props;

  return (
    <div className="bodytext" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

Bodytext.propTypes = {
  html: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Bodytext;
