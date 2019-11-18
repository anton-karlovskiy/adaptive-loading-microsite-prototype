
import ReactMarkdown from 'react-markdown';

import CodeBlock from '../CodeBlock';

const Markdown = ({ source, ...rest }) => (
  <ReactMarkdown source={source} renderers={{code: CodeBlock}} {...rest} />
);

export default Markdown;
