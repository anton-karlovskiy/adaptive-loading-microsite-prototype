
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

export {
  demos,
  getDemosPath
};
