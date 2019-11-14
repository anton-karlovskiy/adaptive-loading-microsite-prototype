
// ray test touch <
import Head from 'next/head';

import ThumbnailGrid from '../components/ThumbnailGrid';
import Thumbnail from '../components/Thumbnail';
import HeroSection from '../hoc/HeroSection';
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
    <Head>
      <title>Demos</title>
    </Head>
    <HeroSection>
      <ThumbnailGallery>
        <ThumbnailGrid>
          { demos.map(demo => {
              const { id, thumbnail, path } = demo;
              const source = `/images/demos/${thumbnail}`;
              return (
                <Thumbnail key={id} src={source} alt='' onClick={null} />
              );
          }) }
        </ThumbnailGrid>
      </ThumbnailGallery>
    </HeroSection>
  </>
);

export default Demos;
// ray test touch >
