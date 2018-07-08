import React from "react";
import PropTypes from "prop-types";

import Typography from "../Typography";

const TextBlock = props => {
  const {
    page: {
      html,
      frontmatter: { title }
    }
  } = props;

  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <div className="bodytext" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

TextBlock.propTypes = {
  page: PropTypes.object.isRequired
};

export default TextBlock;
