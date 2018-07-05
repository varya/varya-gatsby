import React from "react";
import PropTypes from "prop-types";

import asyncComponent from "../AsyncComponent";
import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";
import Meta from "./Meta";
import Author from "./Author";
import Comments from "./Comments";
import NextPrev from "./NextPrev";

const Share = asyncComponent(() =>
  import("./Share")
    .then(module => {
      return module;
    })
    .catch(error => {})
);

const Post = props => {
  const {
    post,
    post: {
      html,
      fields: { prefix, slug },
      frontmatter: { title, author, category }
    },
    authornote,
    facebook,
    next: nextPost,
    prev: prevPost,
  } = props;

  return (
    <React.Fragment>
      <header>
        <Headline title={title} />
        <Meta prefix={prefix} author={author} category={category} />
      </header>
      <Bodytext html={html} />
      <footer>
        <Share post={post} />
        <Author note={authornote} />
        <NextPrev next={nextPost} prev={prevPost} />
        <Comments slug={slug} facebook={facebook} />
      </footer>
    </React.Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  authornote: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
};

export default Post;
