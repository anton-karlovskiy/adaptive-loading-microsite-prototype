
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = ({ language, value, style }) => (
  <SyntaxHighlighter language={language} style={style}>
    {value}
  </SyntaxHighlighter>
);

CodeBlock.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string.isRequired,
  style: PropTypes.object
};

CodeBlock.defaultProps = {
  language: 'javascript',
  style: solarizedDark
};

export default CodeBlock;
