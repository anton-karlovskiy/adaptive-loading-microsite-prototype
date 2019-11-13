
import Head from 'next/head';
import Link from 'next/link';

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
    <div></div>
    <div></div>
    <style jsx>{`
      .illustration {
        display: flex;
      }
    `}</style>
  </div>
);

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <section className='main'>
      <div className='container'>
        <Description />
        <Illustration />
      </div>
    </section>
    <style jsx>{`
      .main {
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
