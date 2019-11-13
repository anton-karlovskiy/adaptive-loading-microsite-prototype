
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

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
          <Link href='/get-started'>
            <a>Get Started</a>
          </Link>
        </li>
        <li>
          <Link href='/chrome-dev-summit-talk'>
            <a>Chrome Dev Summit talk</a>
          </Link>
        </li>
        <li>
          <Link href='/device-year-class'>
            <a>Device Year Class</a>
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
    `}</style>
  </div>
);

const Illustration = () => (
  <div className='illustration'>
    <div className='factor-type'>
      <img onClick={() => Router.push('/')} width='100%' src='/images/factor-type.svg' alt='memory cpu network' />
    </div>
    <div className='low-data'>
      <img onClick={() => Router.push('/')} width='100%' src='/images/low-data.png' alt='phone with low data' />
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
        box-shadow: 0 0 0 1px rgba(255,255,255,.16);
        transition: box-shadow .3s cubic-bezier(.4,0,.2,1);
      }
      .illustration > .factor-type > img {
        border: 1px solid rgba(158,158,158,.3);
      }
      .illustration > .low-data {
        flex: 1;
        cursor: pointer;
      }
      .illustration > .low-data:hover {
        box-shadow: 0 0 0 1px rgba(255,255,255,.16);
        transition: box-shadow .3s cubic-bezier(.4,0,.2,1);
      }
    `}</style>
  </div>
);

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <section className='hero'>
      <div className='container'>
        <Description />
        <Illustration />
      </div>
    </section>
    <style jsx>{`
      .hero {
        padding: 152px 0 48px 0;
      }
      .container {
        margin: 0 auto;
        max-width: 1520px;
        padding: 0 16px;
      }
      
      @media screen and (min-width: 921px) {
        .container {
          padding: 0 40px;
        }
      }
    `}</style>
  </div>
);

export default Home;
