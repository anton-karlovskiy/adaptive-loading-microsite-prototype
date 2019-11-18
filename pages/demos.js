

import ThumbnailGrid from '../components/ThumbnailGrid';
import Thumbnail from '../components/Thumbnail';
import HeroSection from '../hoc/HeroSection';
import CenterLayer from '../hoc/CenterLayer';
import Head from '../components/Head';
import { pages } from '../utils/links';
import { demos } from '../data';

const Demos = () => (
  <>
    <Head title={pages.demos.title} />
    <HeroSection>
      <CenterLayer>
        <ThumbnailGrid>
          { demos.map(demo => {
            const { id, title, posterName, sourceCode, liveDemo } = demo;
            return (
              <Thumbnail
                key={id}
                title={title}
                posterName={posterName}
                alt={title}
                lazyload
                sourceCode={sourceCode}
                liveDemo={liveDemo} />
            );
          }) }
        </ThumbnailGrid>
      </CenterLayer>
    </HeroSection>
  </>
);

export default Demos;
