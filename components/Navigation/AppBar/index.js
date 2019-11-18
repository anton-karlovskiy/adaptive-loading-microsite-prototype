
import Link from 'next/link';
// TODO: double check if we really need material components
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from '@material/react-top-app-bar';
import '@material/react-top-app-bar/dist/top-app-bar.css';

import NavigationItemList from '../NavigationItemList';
import SvgIcon from '../../SvgIcon';
import { pages } from '../../../utils/links';

const AppBar = ({ openDrawer }) => (
  <>
    <TopAppBar className='top-app-bar' fixed>
      <TopAppBarRow className='top-app-bar-row'>
        <TopAppBarSection className='top-app-bar-section' align='start'>
          <TopAppBarIcon navIcon tabIndex={0}>
            <SvgIcon name='menu' withHoverEffect onClick={openDrawer} />
          </TopAppBarIcon>
          <TopAppBarTitle className='top-app-bar-title'>
            <Link href={pages.home.href} as={pages.home.as}>
              <a><SvgIcon name='main' /></a>
            </Link>
          </TopAppBarTitle>
        </TopAppBarSection>
        <TopAppBarSection className='top-app-bar-section' align='end' role='toolbar'>
          <NavigationItemList />
          {/* TODO: hidden for now */}
          {/* <TopAppBarIcon actionItem tabIndex={0}>
            <SvgIcon name='search' withHoverEffect onClick={() => console.log('[AppBar] search click')} />
          </TopAppBarIcon> */}
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <style jsx>{`
      :global(.top-app-bar) {
        box-shadow: 0 2px 4px rgba(0,0,0,.5);
        background-color: #212121;
        height: 112px;
      }
      
      :global(.top-app-bar-row) {
        height: 72px;
      }
      
      :global(.top-app-bar-title) {
        display: flex;
        padding-left: 10px;
      }
      
      :global(.top-app-bar-section) {
        padding: 0 12px;
      }
      
      @media screen and (min-width: 921px) {
        :global(.top-app-bar) {
          height: auto;
        }
      }
    `}</style>
  </>
);

export default AppBar;
