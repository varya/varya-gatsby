import FaAngleDown from "react-icons/lib/fa/angle-down";
import PropTypes from "prop-types";
import React from "react";

const Expand = props => {
  const { onClick, theme } = props;

  return (
      <button className="more" to="#" onClick={onClick} aria-label="expand">
        <FaAngleDown size={30} />
      </button>

  );
};

Expand.propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.object.isRequired
};

export default Expand;
