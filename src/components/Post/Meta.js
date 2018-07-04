import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import FaCalendar from "react-icons/lib/fa/calendar";
import FaUser from "react-icons/lib/fa/user";
import FaTag from "react-icons/lib/fa/tag";

const Meta = props => {
  const { prefix, author: authorName, category, theme } = props;

  return (
    <p className="meta">
      <span>
        <FaCalendar size={18} /> {prefix}
      </span>
      <span>
        <FaUser size={18} /> {authorName}
      </span>
      {category && (
        <span>
          <FaTag size={18} />
          <Link to={`/category/${category}`}>{category}</Link>
        </span>
      )}

    </p>
  );
};

Meta.propTypes = {
  prefix: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Meta;
