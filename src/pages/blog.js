import PropTypes from "prop-types";
import React from "react";

import Blog from "../components/Blog";

class BlogPage extends React.Component {

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

BlogPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default BlogPage;

//eslint-disable-next-line no-undef
export const guery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/.*/" } }
      sort: { fields: [frontmatter___date], order: DESC }
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
            date(formatString: "DD MMMM YYYY")
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
