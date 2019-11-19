
import { useState } from 'react';

import AppBar from './AppBar';
import SideDrawer from './SideDrawer';

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawerHandler = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawerHandler = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <AppBar openDrawer={openDrawerHandler} />
      <SideDrawer isOpened={isDrawerOpen} onClose={closeDrawerHandler} />
    </>
  );
};

export default Navigation;
