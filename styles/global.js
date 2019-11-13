
import css from 'styled-jsx/css';

import theme from './theme';

export default css.global`
  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.fontFamily.sansSerif};
    margin: 0;
    padding: 0;
    font-size: calc(10px + 1vmin);
    font-weight: 400;
    line-height: 1.8;
  }
  p {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;
