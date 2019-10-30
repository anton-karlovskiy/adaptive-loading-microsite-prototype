
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from '@material/react-top-app-bar';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css';

import theme from '../../styles/theme';
import './app-bar.css';

const AppBar = ({ openDrawer }) => (
  <TopAppBar fixed>
    <TopAppBarRow>
      <TopAppBarSection align='start'>
        <TopAppBarIcon navIcon tabIndex={0}>
          <MaterialIcon
            hasRipple
            icon='menu'
            onClick={openDrawer} />
        </TopAppBarIcon>
        <TopAppBarTitle className='top-app-bar-title'>
          <img src={theme.logo.src} width='20px' alt={theme.logo.alt} />
        </TopAppBarTitle>
      </TopAppBarSection>
      <TopAppBarSection align='end' role='toolbar'>
        <TopAppBarIcon actionItem tabIndex={0}>
          <MaterialIcon
            aria-label='search page'
            hasRipple
            icon='search'
            onClick={() => console.log('[AppBar] search click')} />
        </TopAppBarIcon>
      </TopAppBarSection>
    </TopAppBarRow>
  </TopAppBar>
);

export default AppBar;
