import FaArrowRight from "react-icons/lib/fa/arrow-right";
import FaCalendar from "react-icons/lib/fa/calendar";
import FaTag from "react-icons/lib/fa/tag";
import FaUser from "react-icons/lib/fa/user";
import Img from "gatsby-image";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

const Item = props => {
  const {
    post: {
      excerpt,
      fields: { slug, prefix },
      frontmatter: {
        title,
        category,
        author,
        /*cover: {
          children: [{ sizes }]
        }*/
      }
    }
  } = props;

  return (
      <li>
        <Link to={slug} key={slug} className="link">
          <h1>
            {title} <FaArrowRight className="arrow" />
          </h1>
          <p className="meta">
            <span>
              <FaCalendar size={18} /> {prefix}
            </span>
            <span>
              <FaUser size={18} /> {author}
            </span>
            {category && (
              <span>
                <FaTag size={18} /> {category}
              </span>
            )}
          </p>
          <p>{excerpt}</p>
        </Link>
      </li>
  );
};

Item.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Item;
