
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from '@material/react-top-app-bar';

import NavigationItemList from '../NavigationItemList';
import SvgIcon from '../../SvgIcon';
import theme from '../../../styles/theme';
import './app-bar.css';

const AppBar = ({ openDrawer }) => (
  <TopAppBar className='top-app-bar' fixed>
    <TopAppBarRow className='top-app-bar-row'>
      <TopAppBarSection className='top-app-bar-section' align='start'>
        <TopAppBarIcon navIcon tabIndex={0}>
          <SvgIcon name='menu' onClick={openDrawer} />
        </TopAppBarIcon>
        <TopAppBarTitle className='top-app-bar-title'>
          <img src={theme.logo.src} width='20px' alt={theme.logo.alt} />
        </TopAppBarTitle>
      </TopAppBarSection>
      <TopAppBarSection className='top-app-bar-section' align='end' role='toolbar'>
        <NavigationItemList />
        <TopAppBarIcon actionItem tabIndex={0}>
          <SvgIcon name='search' onClick={() => console.log('[AppBar] search click')} />
        </TopAppBarIcon>
      </TopAppBarSection>
    </TopAppBarRow>
  </TopAppBar>
);

export default AppBar;
