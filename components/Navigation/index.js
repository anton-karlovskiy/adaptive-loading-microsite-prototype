
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
      <SideDrawer title='Adaptive Loading' open={isDrawerOpen} closeDrawer={closeDrawerHandler} />
      <AppBar openDrawer={openDrawerHandler} />
    </>
  );
};

export default Navigation;
