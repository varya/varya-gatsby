import styled, { injectGlobal } from 'styled-components'

import { colorScheme } from '../Colors/Colors.js';

injectGlobal`
/* cyrillic-ext */
@font-face {
  font-family: 'Tinos';
  font-style: normal;
  font-weight: 400;
  src: local('Tinos Regular'), local('Tinos-Regular'), url(https://fonts.gstatic.com/s/tinos/v11/buE4poGnedXvwjX2fmRD8iI_wNU.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Tinos';
  font-style: normal;
  font-weight: 400;
  src: local('Tinos Regular'), local('Tinos-Regular'), url(https://fonts.gstatic.com/s/tinos/v11/buE4poGnedXvwjX_fmRD8iI_wNU.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* latin-ext */
@font-face {
  font-family: 'Tinos';
  font-style: normal;
  font-weight: 400;
  src: local('Tinos Regular'), local('Tinos-Regular'), url(https://fonts.gstatic.com/s/tinos/v11/buE4poGnedXvwjX1fmRD8iI_wNU.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Tinos';
  font-style: normal;
  font-weight: 400;
  src: local('Tinos Regular'), local('Tinos-Regular'), url(https://fonts.gstatic.com/s/tinos/v11/buE4poGnedXvwjX7fmRD8iI_.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

* {
  font-family: 'Tinos';
}

html, body {
  font-size: 16px;
}

h2 {
  font-size: 2em;
  font-weight: bold;
}

h3 {
  font-size: 1.5em;
  font-weight: bold;
}

h4 {
  font-size: 1.25em;
  font-weight: bold;
}
h4 {
  font-size: 1em;
  font-weight: bold;
}

a {
  color: ${colorScheme.highlightCold}
  text-decoration: underline;
}
`

export const P = styled.p`
  font-family: 'Tinos';
`

export const Title = styled.h2`
  font-family: 'Tinos';
  font-size: 2em;
  font-weight: bold;
`

export const SubTitle = styled.h3`
  font-family: 'Tinos';
  font-size: 1.5em;
  font-weight: bold;
`
