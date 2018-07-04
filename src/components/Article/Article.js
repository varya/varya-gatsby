import React from "react";
import PropTypes from "prop-types";

const Article = props => {
  const { children, theme } = props;

  return (
    <article className="article">{children}</article>
  );
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired
};

export default Article;
