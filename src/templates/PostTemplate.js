import PropTypes from "prop-types";
import React from "react";

import { Container, LeftSide, Content, RightSide } from "../components/Layout/Layout";

import Article from "../components/Article";
import Post from "../components/Post";

const PostTemplate = props => {
  const {
    data: {
      post,
      authornote: { html: authorNote }
    },
    pathContext: { next, prev }
  } = props;

  return (
      <Container>
        <Content>
          <Article>
            <Post
              post={post}
              next={next}
              prev={prev}
              authornote={authorNote}
            />
          </Article>
        </Content>
        <RightSide>
           Sidebar here
        </RightSide>
        <LeftSide>prompt</LeftSide>
    </Container>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired
};

export default PostTemplate;

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        category
        cover {
          childImageSharp {
            resize(width: 300) {
              src
            }
          }
        }
      }
    }
    authornote: markdownRemark(id: { regex: "/author/" }) {
      id
      html
    }
  }
`;
