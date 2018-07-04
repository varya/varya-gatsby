import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import config from "../../../content/meta/config";
import Menu from "../Menu";

import avatar from "../../images/jpg/avatar.jpg";

class Header extends React.Component {
  state = {
    fixed: false
  };

  visibilitySensorChange = val => {
    if (val) {
      this.setState({ fixed: false });
    } else {
      this.setState({ fixed: true });
    }
  };

  render() {
    const { pages, path } = this.props;
    const { fixed } = this.state;

    return (
      <div>
        <header>
          <Link to="/" className="logoType">
            <div className="logo">
              <img src={avatar} alt={config.siteTitle} />
            </div>
            <div className="type">
              <h1>{config.headerTitle}</h1>
              <h2>{config.headerSubTitle}</h2>
            </div>
          </Link>
        </header>
        <Menu
          path={path}
          pages={pages}
          />

      </div>
    );
  }
}

Header.propTypes = {
  pages: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
};

export default Header;
