
import Head from 'next/head';

import ThumbnailGrid from '../components/ThumbnailGrid';
import Thumbnail from '../components/Thumbnail';
import HeroSection from '../hoc/HeroSection';
import { demos } from '../data';
import { navigateToOtherSite } from '../utils/helpers';

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
              const { id, title, thumbnail, link } = demo;
              const source = `/images/demos/${thumbnail}`;
              const onClickHandler = () => {
                navigateToOtherSite(link);
              };
              return (
                <Thumbnail clickable key={id} title={title} src={source} alt={title} onClick={onClickHandler} />
              );
          }) }
        </ThumbnailGrid>
      </ThumbnailGallery>
    </HeroSection>
  </>
);

export default Demos;
