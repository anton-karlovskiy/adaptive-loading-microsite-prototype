
import Head from 'next/head';

import FourColGrid from '../components/FourColGrid';
import ImageThumb from '../components/ImageThumb';
import HeroSection from '../hoc/HeroSection';
import { demos } from '../data';

const Demos = () => (
  <>
    <Head>
      <title>Demos</title>
    </Head>
    <HeroSection>
      <FourColGrid>
        { demos.map(demo => {
            const { id, thumbnail, path } = demo;
            const source = `/images/demos/${thumbnail}`;
            return (
              <ImageThumb key={id} src={source} alt='' onClick={null} />
            );
        }) }
      </FourColGrid>
    </HeroSection>
  </>
);

export default Demos;
