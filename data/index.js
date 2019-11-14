
const DEMOS_PATH = '/images/demos/';
const HOST_URL = 'https://adaptive-loading.web.app/';

const demos = [
  {
    id: 1,
    title: 'Network-aware loading',
    thumbnail: `${DEMOS_PATH}cra-network-aware-loading.PNG`,
    link: `${HOST_URL}cra-network-aware-loading/`
  },
  {
    id: 2,
    title: 'Network-aware only-if-cached loading',
    thumbnail: `${DEMOS_PATH}cra-network-aware-only-if-cached-loading.PNG`,
    link: `${HOST_URL}cra-network-aware-only-if-cached-loading/`
  },
  {
    id: 3,
    title: 'Network-aware code-splitting',
    thumbnail: `${DEMOS_PATH}cra-network-aware-code-splitting.PNG`,
    link: `${HOST_URL}cra-network-aware-code-splitting/`
  },
  {
    id: 4,
    title: 'Network-aware data-fetching',
    thumbnail: `${DEMOS_PATH}cra-network-aware-data-fetching.PNG`,
    link: `${HOST_URL}cra-network-aware-data-fetching/`
  },
  {
    id: 5,
    title: 'Battery considerate loading',
    thumbnail: `${DEMOS_PATH}cra-battery-considerate-loading.PNG`,
    link: `${HOST_URL}cra-battery-considerate-loading/`
  },
  {
    id: 6,
    title: 'Memory considerate loading',
    thumbnail: `${DEMOS_PATH}cra-memory-considerate-loading.PNG`,
    link: `${HOST_URL}cra-memory-considerate-loading/`
  },
  {
    id: 7,
    title: 'Memory considerate loading (SketchFab version)',
    thumbnail: `${DEMOS_PATH}cra-memory-considerate-loading-sketchfab.PNG`,
    link: `${HOST_URL}cra-memory-considerate-loading-sketchfab/`
  },
  {
    id: 8,
    title: 'Memory considerate animation-toggling',
    thumbnail: `${DEMOS_PATH}cna-memory-animation.PNG`,
    link: 'https://cna-memory-animation.firebaseapp.com/'
  },
  {
    id: 9,
    title: 'Device-class aware code-splitting',
    thumbnail: `${DEMOS_PATH}cra-device-class-aware-code-splitting.PNG`,
    link: `${HOST_URL}cra-device-class-aware-code-splitting/`
  },
  {
    id: 10,
    title: 'Hardware concurrency considerate code-splitting',
    thumbnail: `${DEMOS_PATH}cra-hardware-concurrency-considerate-code-splitting.PNG`,
    link: `${HOST_URL}cra-hardware-concurrency-considerate-code-splitting/`
  },
  {
    id: 11,
    title: 'Hardware concurrency considerate loading',
    thumbnail: `${DEMOS_PATH}cra-hardware-concurrency-considerate-loading.PNG`,
    link: `${HOST_URL}cra-hardware-concurrency-considerate-loading/`
  },
  {
    id: 12,
    title: 'UA-aware code-splitting',
    thumbnail: `${DEMOS_PATH}cra-ua-aware-code-splitting.PNG`,
    link: `${HOST_URL}cra-ua-aware-code-splitting/`
  },
  {
    id: 13,
    title: 'DPR(Client Hint)-aware loading',
    thumbnail: `${DEMOS_PATH}node-dpr-aware-loading.PNG`,
    link: `${HOST_URL}node-dpr-aware-loading/`
  },
  {
    id: 14,
    title: 'Memory(Client Hint) considerate loading',
    thumbnail: `${DEMOS_PATH}node-memory-considerate-loading.PNG`,
    link: `${HOST_URL}node-memory-considerate-loading/`
  },
  {
    id: 15,
    title: 'Network(Client Hint)-aware loading',
    thumbnail: `${DEMOS_PATH}node-network-aware-loading.PNG`,
    link: `${HOST_URL}node-network-aware-loading/`
  },
  {
    id: 16,
    title: 'Network & Memory(Client Hints) considerate loading',
    thumbnail: `${DEMOS_PATH}node-network-memory-considerate-loading.PNG`,
    link: `${HOST_URL}node-network-memory-considerate-loading/`
  },
  {
    id: 17,
    title: 'React Twitter - save-data loading based on Client Hint',
    thumbnail: `${DEMOS_PATH}react-twitter-save-data-loading-client-hint.PNG`,
    link: `${HOST_URL}react-twitter-save-data-loading(client-hint)/`
  },
  {
    id: 18,
    title: 'React Twitter - save-data loading based on Hook',
    thumbnail: `${DEMOS_PATH}react-twitter-save-data-loading-hook.PNG`,
    link: `${HOST_URL}react-twitter-save-data-loading(hook)/`
  },
  {
    id: 19,
    title: 'React Movie - network-aware loading',
    thumbnail: `${DEMOS_PATH}react-movie-network-aware-loading.PNG`,
    link: `${HOST_URL}react-movie-network-aware-loading/`
  },
  {
    id: 20,
    title: 'React Shrine - network-aware code-splitting',
    thumbnail: `${DEMOS_PATH}react-shrine-network-aware-code-splitting.PNG`,
    link: `${HOST_URL}react-shrine-network-aware-code-splitting/`
  },
  {
    id: 21,
    title: 'React eBay - network-aware code-splitting',
    thumbnail: `${DEMOS_PATH}react-ebay-network-aware-code-splitting.PNG`,
    link: `${HOST_URL}react-ebay-network-aware-code-splitting/`
  },
  {
    id: 22,
    title: 'React Dixie Mesh - memory considerate loading',
    thumbnail: `${DEMOS_PATH}react-dixie-memory-considerate-loading.PNG`,
    link: `${HOST_URL}react-dixie-memory-considerate-loading/`
  },
  {
    id: 23,
    title: 'React Lottie - network-aware loading',
    thumbnail: `${DEMOS_PATH}react-lottie-network-aware-loading.PNG`,
    link: `${HOST_URL}react-lottie-network-aware-loading/`
  },
  {
    id: 24,
    title: 'React Youtube - adaptive loading with mix of network, memory and hardware concurrency',
    thumbnail: `${DEMOS_PATH}react-youtube-adaptive-loading.PNG`,
    link: `${HOST_URL}react-youtube-adaptive-loading/`
  }
];

export {
  demos
};
