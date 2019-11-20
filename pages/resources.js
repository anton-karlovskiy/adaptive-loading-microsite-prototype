
import Head from '../components/Head';
import Markdown from '../components/Markdown';
import HeroSection from '../hoc/HeroSection';
import GitHubMarkdownWrapper from '../hoc/GitHubMarkdownWrapper';
import { pages } from '../utils/links';
import { resourcesDoc } from '../data/resources';

const Resources = () => (
  <>
    <Head title={pages.resources.title} />
    <HeroSection>
      <GitHubMarkdownWrapper>
        <Markdown source={resourcesDoc} />
      </GitHubMarkdownWrapper>
    </HeroSection>
  </>
);

export default Resources;
