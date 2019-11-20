
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const ReactCodeBlock = ({ value }) => (
  <SyntaxHighlighter language='jsx' style={okaidia}>
    {value}
  </SyntaxHighlighter>
);

export default ReactCodeBlock;
