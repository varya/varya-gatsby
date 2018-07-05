import React from "react";
import PropTypes from "prop-types";
import FacebookProvider, { Comments as FBComments } from "react-facebook";

import config from "../../../content/meta/config";

const Comments = props => {
  const { facebook, slug } = props;

  return (
      <div id="post-comments" className="comments">
        <FacebookProvider appId={facebook.appId}>
          <FBComments href={`${config.siteUrl}${slug}`} width="100%" colorscheme="light" />
        </FacebookProvider>
      </div>

  );
};

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired,
};

export default Comments;
