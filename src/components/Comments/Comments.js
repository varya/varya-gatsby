import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { DiscussionEmbed, CommentCount } from "disqus-react";

import { colorScheme } from '../Colors/Colors.js';

const Comments = props => {
 
  const {
    post: {
      fields: {
        slug,
        title,
        disqusIdentifier
      }
    },
    siteMetadata: {
      siteUrl
    }
  } = props;

  const disqusShortname = 'varya';


  const disqusConfig = {
    url: `${siteUrl}${slug}`,
    identifier: disqusIdentifier,
    title: title,
  };

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
)

};

export default Comments;
