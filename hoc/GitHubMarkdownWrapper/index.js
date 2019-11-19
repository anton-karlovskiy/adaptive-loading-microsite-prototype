
import 'github-markdown-css';

import theme from '../../styles/theme';

const GitHubMarkdownWrapper = ({ children }) => (
  <div className='markdown-body'>
    {children}
    <style jsx>{`
      .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
        color: ${theme.colors.subText};
        font-family: ${theme.fontFamily.roboto};
      }
      .markdown-body :global(h1) {
        color: ${theme.colors.text};
        border-bottom: 1px solid #eaecef;
      }
      .markdown-body :global(h2) {
        border-bottom: 1px solid #eaecef;
      }
      .markdown-body :global(a) {
        color: ${theme.colors.anchorTextOnDark};
      }
      .markdown-body :global(p > code) {
        color: rgb(175, 97, 97);
        margin: 0;
        padding: .2em .4em;
        border-radius: 3px;
        background-color: rgb(27, 29, 35);
      }
      .markdown-body :global(img) {
        background-color: transparent;
      }
      @media (max-width: 767px) {
        .markdown-body {
          padding: 15px;
        }
      }
    `}</style>
  </div>
);

export default GitHubMarkdownWrapper;
