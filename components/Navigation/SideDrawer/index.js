
import { useState } from 'react';
import Drawer, { DrawerContent, DrawerHeader, DrawerTitle } from '@material/react-drawer';
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';
// ray test touch <
// TODO: use svg icons
import MaterialIcon from '@material/react-material-icon';
// ray test touch >

const SideDrawer = ({ title, open, closeDrawer }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  return (
    <Drawer
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
            <ListItemGraphic graphic={<MaterialIcon icon='folder'/>} />
            <ListItemText primaryText='Mail' />
          </ListItem>
        </List>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
