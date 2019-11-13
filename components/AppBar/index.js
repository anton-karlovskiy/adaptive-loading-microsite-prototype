
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from '@material/react-top-app-bar';
// ray test touch <
// TODO: use svg icons
// import MaterialIcon from '@material/react-material-icon';
// ray test touch >

// ray test touch <
import SvgIcon from '../SvgIcon';
// ray test touch >

import theme from '../../styles/theme';
import './app-bar.css';

const AppBar = ({ openDrawer }) => (
  <TopAppBar className='top-app-bar' fixed>
    <TopAppBarRow>
      <TopAppBarSection align='start'>
        <TopAppBarIcon navIcon tabIndex={0}>
          {/* ray test touch < */}
          {/* <MaterialIcon
            hasRipple
            icon='menu'
            onClick={openDrawer} /> */}
          <SvgIcon name='menu' onClick={openDrawer} />
          {/* ray test touch > */}
        </TopAppBarIcon>
        <TopAppBarTitle className='top-app-bar-title'>
          <img src={theme.logo.src} width='20px' alt={theme.logo.alt} />
        </TopAppBarTitle>
      </TopAppBarSection>
      <TopAppBarSection align='end' role='toolbar'>
        {/* ray test touch < */}
        {/* <TopAppBarIcon actionItem tabIndex={0}>
          <MaterialIcon
            aria-label='search page'
            hasRipple
            icon='search'
            onClick={() => console.log('[AppBar] search click')} />
        </TopAppBarIcon> */}
        {/* ray test touch > */}
      </TopAppBarSection>
    </TopAppBarRow>
  </TopAppBar>
);

export default AppBar;
