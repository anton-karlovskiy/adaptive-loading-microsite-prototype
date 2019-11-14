
import Head from 'next/head';
import Link from 'next/link';

import HeroSection from '../hoc/HeroSection';
import { highlights } from '../utils/links';
import theme from '../styles/theme';
import { banners } from '../styles/images';

const Description = () => (
  <div className='description'>
    <div className='summary'>
      <h1>Adaptive Loading</h1>
      <p>Differentially deliver fast, lighter experiences for users on slow networks & devices</p>
    </div>
    <div className='highlights'>
      <h4 className='uppercase'>HIGHLIGHTS</h4>
      <ul>
        <li>
          <Link
            href={highlights.getStarted.href}
            as={highlights.getStarted.as}>
            <a>{highlights.getStarted.caption}</a>
          </Link>
        </li>
        <li>
          <Link
            href={highlights.chromeDevSummitTalk.href}
            href={highlights.chromeDevSummitTalk.as}>
            <a>{highlights.chromeDevSummitTalk.caption}</a>
          </Link>
        </li>
        <li>
          <Link
            href={highlights.deviceYearClass.href}
            as={highlights.deviceYearClass.as}>
            <a>{highlights.deviceYearClass.caption}</a>
          </Link>
        </li>
      </ul>
    </div>
    <style jsx>{`
      .description {
        display: flex;
        align-items: center;
        margin-bottom: 48px;
      }
      .description > div {
        padding: 0 20px;
      }
      .description > .summary {
        flex: 2;
      }
      .description > .highlights {
        flex: 1;
      }
      h4 {
        font-size: 14px;
      }
      a {
        text-decoration: underline;
        font-size: 20px;
      }
      a:visited {
        color: #a6a6a6;
      }
      @media screen and (max-width: 920px) {
        .highlights {
          display: none;
        }
      }
    `}</style>
  </div>
);

const Illustration = () => (
  <div className='illustration'>
    <div className='factor-type'>
      <Link href='/' as ='/'>
        <img width='100%' src={banners.factorType.src} alt={banners.factorType.alt} />
      </Link>
    </div>
    <div className='low-data'>
      <Link href='/' as ='/'>
        <img width='100%' src={banners.lowData.src} alt={banners.lowData.alt} />
      </Link>
    </div>
    <style jsx>{`
      .illustration {
        display: flex;
      }
      .illustration > div {
        padding: 1.25rem;
      }
      .illustration > .factor-type {
        flex: 2;
        cursor: pointer;
      }
      .illustration > .factor-type:hover {
        ${theme.imageHoveringEffect}
      }
      .illustration > .factor-type > img {
        border: 1px solid rgba(158,158,158,.3);
      }
      .illustration > .low-data {
        flex: 1;
        cursor: pointer;
      }
      .illustration > .low-data:hover {
        ${theme.imageHoveringEffect}
      }
      @media screen and (max-width: 520px) {
        .illustration {
          flex-direction: column;
        }
      }
    `}</style>
  </div>
);

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <HeroSection>
      <div className='container'>
        <Description />
        <Illustration />
      </div>
    </HeroSection>
    <style jsx>{`
      .container {
        margin: 0 auto;
        max-width: 1520px;
        padding: 0;
      }
      @media screen and (min-width: 921px) {
        .container {
          padding: 0 40px;
        }
      }
    `}</style>
  </>
);

export default Home;
