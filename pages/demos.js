

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
              const { id, title, fileName, link } = demo;
              return (
                <a key={id} href={link} target='_blank' rel='noopener noreferrer'>
                  <Thumbnail title={title} fileName={fileName} alt={title} lazyload />
                </a>
              );
          }) }
        </ThumbnailGrid>
      </CenterLayer>
    </HeroSection>
  </>
);

export default Demos;
