
// TODO: dummy for now
const theme = {
  fontFamily: {
    sansSerif: '-apple-system, "Helvetica Neue", Arial, sans-serif',
    mono: 'Menlo, Monaco, monospace'
  },
  colors: {
    text: '#333',
    background: '#202124',
    // link: '#1eaaf1',
    // linkHover: '#0d8ecf',
    // border: '#ddd',
    // warning: '#fff3cd',
    // success: '#d4edda'
  },
  logo: {
    src: '/images/icons/f-analytics.svg',
    alt: 'green analytics graph'
  },
  hoveringTransition: `
    transition: color .1s cubic-bezier(.4,0,.2,1);
    transition-property: color;
    transition-duration: 0.1s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0s;
  `
};

export default theme;
