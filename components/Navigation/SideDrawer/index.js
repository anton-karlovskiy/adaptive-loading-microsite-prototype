
import { useState } from 'react';
// TODO: double check if we really need material components
import Drawer, { DrawerContent, DrawerHeader, DrawerTitle } from '@material/react-drawer';
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';
import '@material/react-drawer/dist/drawer.css';
import '@material/react-list/dist/list.css';

import SvgIcon from '../../SvgIcon';

const SideDrawer = ({ title, open, closeDrawer }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  return (
    <>
      <Drawer
        className='drawer'
        modal
        open={open}
        onClose={closeDrawer}>
        <DrawerHeader>
          <DrawerTitle tag='h2'>
            {title}
          </DrawerTitle>
        </DrawerHeader>
        <DrawerContent>
          <List singleSelection selectedIndex={selectedIndex}>
            <ListItem>
              <ListItemGraphic graphic={<SvgIcon name='folder'/>} />
              <ListItemText primaryText='Mail' />
            </ListItem>
          </List>
        </DrawerContent>
      </Drawer>
      <style jsx>{`
        :global(.drawer) {
          z-index: 20;
        }
      `}</style>
    </>
  );
};

export default SideDrawer;
