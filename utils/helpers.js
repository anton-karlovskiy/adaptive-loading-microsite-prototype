
const navigateToOtherSite = siteUrl => {
  try {
    window.location.assign(siteUrl);
  } catch (error) {
    console.log('[utils helpers navigateToOtherSite] error => ', error);
  }
};

export {
  navigateToOtherSite
};
