import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colorScheme } from '../Colors/Colors.js';

const LogoContainer = styled.div`
  font-size: 2em;
  font-weight: bold;
`;
const LogoVar = styled.b`
  color: ${colorScheme.highlightWarm};
  &:after {
    content: ' ';
  }
`;
const LogoYa = styled.b`
  color: ${colorScheme.highlightCold};
  &:after {
    content: ';';
    color: grey;
  }
`;

const Logo = props => {

  return (
    <LogoContainer>
      <LogoVar>var</LogoVar>
      <LogoYa>ya</LogoYa>
    </LogoContainer>
  );
};

export default Logo;
