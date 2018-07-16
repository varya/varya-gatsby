import PropTypes from "prop-types";
import React from "react";

import Blog from "../components/Blog";

class IndexPage extends React.Component {

  render() {
    const {
      data: {
        posts: { edges: posts = [] }
      }
    } = this.props;

    return (
      <div>

        <Blog posts={posts} />

      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const guery = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/.*/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            author
            cover {
              children {
                ... on ImageSharp {
                  sizes(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpSizes_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

//hero-background
