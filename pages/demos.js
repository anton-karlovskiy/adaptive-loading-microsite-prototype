

import ThumbnailGrid from '../components/ThumbnailGrid';
import Thumbnail from '../components/Thumbnail';
import HeroSection from '../hoc/HeroSection';
import Head from '../components/Head';
import { pages } from '../utils/links';
import { demos } from '../data';

const ThumbnailGallery = ({ children }) => (
  <div className='thumbnail-gallery'>
    {children}
    <style jsx>{`
      .thumbnail-gallery {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 20px;
      }
    `}</style>
  </div>
);

const Demos = () => (
  <>
    <Head title={pages.demos.title} />
    <HeroSection>
      <ThumbnailGallery>
        <ThumbnailGrid>
          { demos.map(demo => {
              const { id, title, thumbnail, link } = demo;
              return (
                <a key={id} href={link} target='_blank' rel='noopener noreferrer'>
                  <Thumbnail title={title} src={thumbnail} alt={title} />
                </a>
              );
          }) }
        </ThumbnailGrid>
      </ThumbnailGallery>
    </HeroSection>
  </>
);

export default Demos;
