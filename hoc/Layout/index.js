
import { useState } from 'react';
import Drawer, { DrawerContent, DrawerHeader, DrawerTitle } from '@material/react-drawer';
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';
import MaterialIcon from '@material/react-material-icon';

import AppBar from '../../components/AppBar';
import globalStyles from '../../styles/global.js';
import './layout.css';

const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openDrawerHandler = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawerHandler = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className='layout'>
      <Drawer
        modal
        open={isDrawerOpen}
        onClose={closeDrawerHandler}>
        <DrawerHeader>
          <DrawerTitle tag='h2'>
            Adaptive Loading
          </DrawerTitle>
        </DrawerHeader>
        <DrawerContent>
          <List singleSelection selectedIndex={selectedIndex}>
            <ListItem>
              <ListItemGraphic graphic={<MaterialIcon icon='folder'/>} />
              <ListItemText primaryText='Mail' />
            </ListItem>
          </List>
        </DrawerContent>
      </Drawer>
      <AppBar openDrawer={openDrawerHandler} />
      {children}
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
};

export default Layout;
