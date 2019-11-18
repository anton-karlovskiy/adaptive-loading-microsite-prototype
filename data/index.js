
const HOST_URL = 'https://adaptive-loading.web.app/';

const demos = [
  {
    id: 1,
    title: 'Network-aware loading',
    fileName: `cra-network-aware-loading`,
    link: `${HOST_URL}cra-network-aware-loading/`
  },
  {
    id: 2,
    title: 'Network-aware only-if-cached loading',
    fileName: `cra-network-aware-only-if-cached-loading`,
    link: `${HOST_URL}cra-network-aware-only-if-cached-loading/`
  },
  {
    id: 3,
    title: 'Network-aware code-splitting',
    fileName: `cra-network-aware-code-splitting`,
    link: `${HOST_URL}cra-network-aware-code-splitting/`
  },
  {
    id: 4,
    title: 'Network-aware data-fetching',
    fileName: `cra-network-aware-data-fetching`,
    link: `${HOST_URL}cra-network-aware-data-fetching/`
  },
  {
    id: 5,
    title: 'Battery considerate loading',
    fileName: `cra-battery-considerate-loading`,
    link: `${HOST_URL}cra-battery-considerate-loading/`
  },
  {
    id: 6,
    title: 'Memory considerate loading',
    fileName: `cra-memory-considerate-loading`,
    link: `${HOST_URL}cra-memory-considerate-loading/`
  },
  {
    id: 7,
    title: 'Memory considerate loading (SketchFab version)',
    fileName: `cra-memory-considerate-loading-sketchfab`,
    link: `${HOST_URL}cra-memory-considerate-loading-sketchfab/`
  },
  {
    id: 8,
    title: 'Memory considerate animation-toggling',
    fileName: `cna-memory-animation`,
    link: 'https://cna-memory-animation.firebaseapp.com/'
  },
  {
    id: 9,
    title: 'Device-class aware code-splitting',
    fileName: `cra-device-class-aware-code-splitting`,
    link: `${HOST_URL}cra-device-class-aware-code-splitting/`
  },
  {
    id: 10,
    title: 'Hardware concurrency considerate code-splitting',
    fileName: `cra-hardware-concurrency-considerate-code-splitting`,
    link: `${HOST_URL}cra-hardware-concurrency-considerate-code-splitting/`
  },
  {
    id: 11,
    title: 'Hardware concurrency considerate loading',
    fileName: `cra-hardware-concurrency-considerate-loading`,
    link: `${HOST_URL}cra-hardware-concurrency-considerate-loading/`
  },
  {
    id: 12,
    title: 'UA-aware code-splitting',
    fileName: `cra-ua-aware-code-splitting`,
    link: `${HOST_URL}cra-ua-aware-code-splitting/`
  },
  {
    id: 13,
    title: 'DPR(Client Hint)-aware loading',
    fileName: `node-dpr-aware-loading`,
    link: `${HOST_URL}node-dpr-aware-loading/`
  },
  {
    id: 14,
    title: 'Memory(Client Hint) considerate loading',
    fileName: `node-memory-considerate-loading`,
    link: `${HOST_URL}node-memory-considerate-loading/`
  },
  {
    id: 15,
    title: 'Network(Client Hint)-aware loading',
    fileName: `node-network-aware-loading`,
    link: `${HOST_URL}node-network-aware-loading/`
  },
  {
    id: 16,
    title: 'Network & Memory(Client Hints) considerate loading',
    fileName: `node-network-memory-considerate-loading`,
    link: `${HOST_URL}node-network-memory-considerate-loading/`
  },
  {
    id: 17,
    title: 'React Twitter - save-data loading based on Client Hint',
    fileName: `react-twitter-save-data-loading-client-hint`,
    link: `${HOST_URL}react-twitter-save-data-loading(client-hint)/`
  },
  {
    id: 18,
    title: 'React Twitter - save-data loading based on Hook',
    fileName: `react-twitter-save-data-loading-hook`,
    link: `${HOST_URL}react-twitter-save-data-loading(hook)/`
  },
  {
    id: 19,
    title: 'React Movie - network-aware loading',
    fileName: `react-movie-network-aware-loading`,
    link: `${HOST_URL}react-movie-network-aware-loading/`
  },
  {
    id: 20,
    title: 'React Shrine - network-aware code-splitting',
    fileName: `react-shrine-network-aware-code-splitting`,
    link: `${HOST_URL}react-shrine-network-aware-code-splitting/`
  },
  {
    id: 21,
    title: 'React eBay - network-aware code-splitting',
    fileName: `react-ebay-network-aware-code-splitting`,
    link: `${HOST_URL}react-ebay-network-aware-code-splitting/`
  },
  {
    id: 22,
    title: 'React Dixie Mesh - memory considerate loading',
    fileName: `react-dixie-memory-considerate-loading`,
    link: `${HOST_URL}react-dixie-memory-considerate-loading/`
  },
  {
    id: 23,
    title: 'React Lottie - network-aware loading',
    fileName: `react-lottie-network-aware-loading`,
    link: `${HOST_URL}react-lottie-network-aware-loading/`
  },
  {
    id: 24,
    title: 'React Youtube - adaptive loading with mix of network, memory and hardware concurrency',
    fileName: `react-youtube-adaptive-loading`,
    link: `${HOST_URL}react-youtube-adaptive-loading/`
  }
];

const getDemosPath = fileExtension => {
  const demosPath = `/images/demos/${fileExtension}/`;
  return demosPath;
};

const reactHooksDoc = `
# React Adaptive Loading Hooks &amp; Utilities &middot; ![](https://img.shields.io/github/license/GoogleChromeLabs/react-adaptive-hooks.svg) [![Build Status](https://travis-ci.org/GoogleChromeLabs/react-adaptive-hooks.svg?branch=master)](https://travis-ci.org/GoogleChromeLabs/react-adaptive-hooks) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-adaptive-hooks)

> Deliver experiences best suited to a user's device and network constraints (experimental)

This is a suite of [React Hooks](https://reactjs.org/docs/hooks-overview.html) and utilities for adaptive loading based on a user's:

* [Network via effective connection type](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType)
* [Data Saver preferences](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/saveData)
* [Device memory](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory)
* [Logical CPU cores](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency)

It can be used to add patterns for adaptive resource loading, data-fetching, code-splitting and capability toggling.

## Objective

Make it easier to target low-end devices while progressively adding high-end-only features on top. Using these hooks and utilities can help you give users a great experience best suited to their device and network constraints.

## Installation

\`npm i react-adaptive-hooks --save\` or \`yarn add react-adaptive-hooks\`

## Usage

You can import the hooks you wish to use as follows:

\`\`\`
import { useNetworkStatus } from 'react-adaptive-hooks/network';
import { useSaveData } from 'react-adaptive-hooks/save-data';
import { useHardwareConcurrency } from 'react-adaptive-hooks/hardware-concurrency';
import { useMemoryStatus } from 'react-adaptive-hooks/memory';
\`\`\`

and then use them in your components. Examples for each hook and utility can be found below:

### Network

\`useNetworkStatus\` React hook for getting network status (effective connection type)

\`\`\`
import React from 'react';

import { useNetworkStatus } from 'react-adaptive-hooks/network';

const MyComponent = () => {
  const { effectiveConnectionType } = useNetworkStatus();

  let media;
  switch(effectiveConnectionType) {
    case 'slow-2g':
      media = <img src='...' alt='low resolution' />;
      break;
    case '2g':
      media = <img src='...' alt='medium resolution' />;
      break;
    case '3g':
      media = <img src='...' alt='high resolution' />;
      break;
    case '4g':
      media = <video muted controls>...</video>;
      break;
    default:
      media = <video muted controls>...</video>;
      break;
  }
  
  return <div>{media}</div>;
};
\`\`\`

### Save Data

\`useSaveData\` Utility for getting Save Data whether it's Lite mode enabled or not

\`\`\`
import React from 'react';

import { useSaveData } from 'react-adaptive-hooks/save-data';

const MyComponent = () => {
  const { saveData } = useSaveData();
  return (
    <div>
      { saveData ? <img src='...' /> : <video muted controls>...</video> }
    </div>
  );
};
\`\`\`

### CPU Cores / Hardware Concurrency

\`useHardwareConcurrency\` Utility for getting the number of logical CPU processor cores of the user's device

\`\`\`
import React from 'react';

import { useHardwareConcurrency } from 'react-adaptive-hooks/hardware-concurrency';

const MyComponent = () => {
  const { numberOfLogicalProcessors } = useHardwareConcurrency();
  return (
    <div>
      { numberOfLogicalProcessors <= 4 ? <img src='...' /> : <video muted controls>...</video> }
    </div>
  );
};
\`\`\`

### Memory

\`useMemoryStatus\` Utility for getting memory status of the device

\`\`\`
import React from 'react';

import { useMemoryStatus } from 'react-adaptive-hooks/memory';

const MyComponent = () => {
  const { deviceMemory } = useMemoryStatus();
  return (
    <div>
      { deviceMemory < 4 ? <img src='...' /> : <video muted controls>...</video> }
    </div>
  );
};
\`\`\`

### Adaptive Code-loading & Code-splitting

#### Code-loading

Deliver a light, interactive core experience to users and progressively add high-end-only features on top, if a users hardware can handle it. Below is an example using the Network Status hook:

\`\`\`
import React, { Suspense, lazy } from 'react';

import { useNetworkStatus } from 'react-adaptive-hooks/network';

const Full = lazy(() => import(/* webpackChunkName: "full" */ './Full.js'));
const Light = lazy(() => import(/* webpackChunkName: "light" */ './Light.js'));

const MyComponent = () => {
  const { effectiveConnectionType } = useNetworkStatus();
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        { effectiveConnectionType === '4g' ? <Full /> : <Light /> }
      </Suspense>
    </div>
  );
};

export default MyComponent;
\`\`\`

Light.js:
\`\`\`
import React from 'react';

const Light = ({ imageUrl, ...rest }) => (
  <img src={imageUrl} {...rest} />
);

export default Light;
\`\`\`

Full.js:
\`\`\`
import React from 'react';
import Magnifier from 'react-magnifier';

const Full = ({ imageUrl, ...rest }) => (
  <Magnifier src={imageUrl} {...rest} />
);

export default Full;
\`\`\`

#### Code-splitting

We can extend \`React.lazy()\` by incorporating a check for a device or network signal. Below is an example of network-aware code-splitting. This allows us to conditionally load a light core experience or full-fat experience depending on the user's effective connection speed (via \`navigator.connection.effectiveType\`).

\`\`\`
import React, { Suspense } from 'react';

const Component = React.lazy(() => {
  const effectiveType = navigator.connection ? navigator.connection.effectiveType : null

  let module;
  switch (effectiveType) {
    case 'slow-2g':
    case '2g':
    case '3g':
      module = import(/* webpackChunkName: "light" */ './Light.js');
      break;
    case '4g':
      module = import(/* webpackChunkName: "full" */ './Full.js');
      break;
    default:
      module = import(/* webpackChunkName: "full" */ './Full.js');
      break;
  }

  return module;
});

const App = () => {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
};

export default App;
\`\`\`

## License

Licensed under the Apache-2.0 license.

## Team

This project is brought to you by [Addy Osmani](https://github.com/addyosmani) and [Anton Karlovskiy](https://github.com/anton-karlovskiy).
`;

const resourcesDoc = `
## Browser Support

* [Network Information API - effectiveType](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType) is available in [Chrome 61+, Opera 48+, Edge 76+, Chrome for Android 76+, Firefox for Android 68+](https://caniuse.com/#search=effectiveType)

* [Save Data API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/saveData) is available in [Chrome 65+, Opera 62+, Chrome for Android 76+, Opera for Android 46+](https://caniuse.com/#search=saveData)

* [Hardware Concurrency API](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency) is available in [Chrome 37+, Safari 10.1+, Firefox 48+, Opera 24+, Edge 15+, Chrome for Android 76+, Safari on iOS 10.3+, Firefox for Android 68+, Opera for Android 46+](https://caniuse.com/#search=navigator.hardwareConcurrency)

* [Performance memory API](https://developer.mozilla.org/en-US/docs/Web/API/Performance) is a non-standard and only available in [Chrome 7+, Opera, Chrome for Android 18+, Opera for Android](https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory)

* [Device Memory API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory) is available in [Chrome 63+, Opera 50+, Chrome for Android 76+, Opera for Android 46+](https://caniuse.com/#search=deviceMemory)

## References

* [Sophisticated Adaptive Loading Strategies](https://medium.com/@roderickhsiao/sophisticated-adaptive-loading-strategies-7118341fcf91)  
* [Adaptive serving based on network quality](https://web.dev/adaptive-serving-based-on-network-quality/)  
* [Adaptive Serving using JavaScript and the Network Information API](https://addyosmani.com/blog/adaptive-serving/)  
* [Serving Adaptive Components Using the Network Information API](https://dev.to/vorillaz/serving-adaptive-components-using-the-network-information-api-lbo)  
`;

export {
  demos,
  getDemosPath,
  reactHooksDoc,
  resourcesDoc
};
