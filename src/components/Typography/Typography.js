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



/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* TODO: load from website for cyrillic pages only */

@font-face {
  font-family: 'Lato';
  src: url("./font/glato-bold.eot");
  src: local("Lato Bold"), local("Lato-Bold"), url("./font/glato-bold.eot?#iefix") format("embedded-opentype"), url("../font/lato-bold.woff2") format("woff2"), url("../font/lato-bold.woff") format("woff"), url("../font/lato-bold.ttf") format("truetype"), url("../font/lato-bold.svg#lato") format("svg");
  font-weight: 700;
  font-style: normal; }
@font-face {
  font-family: 'Lato';
  src: url("./font/glato-bolditalic.eot");
  src: local("Lato Bold Italic"), local("Lato-BoldItalic"), url("./font/glato-bolditalic.eot?#iefix") format("embedded-opentype"), url("../font/lato-bolditalic.woff2") format("woff2"), url("../font/lato-bolditalic.woff") format("woff"), url("../font/lato-bolditalic.ttf") format("truetype"), url("../font/lato-bolditalic.svg#lato") format("svg");
  font-weight: 700;
  font-style: italic; }
@font-face {
  font-family: 'Lato';
  src: url("./font/glato-regular.eot");
  src: local("Lato Regular"), local("Lato-Regular"), url("./font/glato-regular.eot?#iefix") format("embedded-opentype"), url("../font/lato-regular.woff2") format("woff2"), url("../font/lato-regular.woff") format("woff"), url("../font/lato-regular.ttf") format("truetype"), url("../font/lato-regular.svg#lato") format("svg");
  font-weight: 400;
  font-style: normal; }
@font-face {
  font-family: 'Lato';
  src: url("./font/glato-italic.eot");
  src: local("Lato Italic"), local("Lato-Italic"), url("./font/glato-italic.eot?#iefix") format("embedded-opentype"), url("../font/lato-italic.woff2") format("woff2"), url("../font/lato-italic.woff") format("woff"), url("../font/lato-italic.ttf") format("truetype"), url("../font/lato-italic.svg#lato") format("svg");
  font-weight: 400;
  font-style: italic; }

* {
  font-family: 'Lato', 'Helvetica Neue', Helvetica;
  color: ${colorScheme.dark};
}

html, body {
  font-size: 20px;
  line-height: 2em;
}

h1 {
  font-size: 2.4em;
  font-weight: 300;

  &::after {
    content: '';
    display: block;
    background-color: ${colorScheme.secondary};
    height: 2px;
    width: 50%;
    margin-top: 0.25em;
  }
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
h5 {
  font-size: 1em;
  font-weight: bold;
}

a {
  color: ${colorScheme.primary}
  text-decoration: underline;
}
`
