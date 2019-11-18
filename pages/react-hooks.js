
// ray test touch <
import 'github-markdown-css';

import Head from '../components/Head';
import HeroSection from '../hoc/HeroSection';
import Markdown from '../components/Markdown';
import { pages } from '../utils/links';
import { reactHooksDoc } from '../data';

const ReactHooks = () => {
  return (
    <>
      <Head title={pages.reactHooks.title} />
      <HeroSection>
        <div className='markdown-body'>
          <Markdown
            source={reactHooksDoc}
            escapeHtml={false} />
        </div>
      </HeroSection>
      <style jsx>{`
        .markdown-body {
          box-sizing: border-box;
          min-width: 200px;
          max-width: 980px;
          margin: 0 auto;
          padding: 45px;
        }
        @media (max-width: 767px) {
          .markdown-body {
            padding: 15px;
          }
        }
      `}</style>
    </>
  );
};
// ray test touch >

export default ReactHooks;
