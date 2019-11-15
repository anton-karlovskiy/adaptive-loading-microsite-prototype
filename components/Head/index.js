
// ray test touch <
import Head from 'next/head';

import { head } from '../../styles/images';

export default ({ title, description, keywords }) => (
  <Head>
    <title>{title}</title>
    <meta charSet='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta name='description' content={description} />
    <meta name='keywords' content={keywords || ''} />
    <meta name='format-detection' content='telephone=no' />
    <link rel='apple-touch-icon' sizes='180x180' href={head.appleTouchIcon} />
    <link rel='icon' type='image/png' sizes='32x32' href={head.favicon32} />
    <link rel='icon' type='image/png' sizes='16x16' href={head.favicon16} />
    <link rel='manifest' href='/site.webmanifest' />
    <link rel='mask-icon' href='/assets/images/icons/safari-pinned-tab.svg' color='#5bbad5' />
    <meta name='msapplication-TileColor' content='#da532c' />
    <meta name='msapplication-config' content='/browserconfig.xml' />
    <meta name='theme-color' content='#ffffff' />
  </Head>
);
// ray test touch >
