import React from "react";
import PropTypes from "prop-types";

import Article from "../components/Article";
import TextBlock from "../components/TextBlock";

const PageTemplate = props => {
  const {
    data: {
      page
    }
  } = props;

  return (
    <div>
      <Article>
        <TextBlock title={page.frontmatter.title} html={page.html} />
      </Article>
    </div>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default PageTemplate;

//eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
