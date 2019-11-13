
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from '@material/react-top-app-bar';

import SvgIcon from '../../SvgIcon';

import theme from '../../../styles/theme';
import './app-bar.css';

const AppBar = ({ openDrawer }) => (
  <TopAppBar className='top-app-bar' fixed>
    <TopAppBarRow>
      <TopAppBarSection align='start'>
        <TopAppBarIcon navIcon tabIndex={0}>
          <SvgIcon name='menu' onClick={openDrawer} />
        </TopAppBarIcon>
        <TopAppBarTitle className='top-app-bar-title'>
          <img src={theme.logo.src} width='20px' alt={theme.logo.alt} />
        </TopAppBarTitle>
      </TopAppBarSection>
      <TopAppBarSection align='end' role='toolbar'>
        
      </TopAppBarSection>
    </TopAppBarRow>
  </TopAppBar>
);

export default AppBar;
