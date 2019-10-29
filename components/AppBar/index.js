
import React from 'react';
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from '@material/react-top-app-bar';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css';

import './app-bar.css';

const AppBar = () => (
  <div>
    <TopAppBar fixed>
      <TopAppBarRow>
        <TopAppBarSection align='start'>
          <TopAppBarIcon navIcon tabIndex={0}>
            <MaterialIcon
              hasRipple
              icon='menu'
              onClick={() => console.log('[AppBar] menu click')} />
          </TopAppBarIcon>
          <TopAppBarTitle className='top-app-bar-title'>
            <img src='/images/icons/f-analytics.svg' width='20px' alt='green analytics graph' />
          </TopAppBarTitle>
        </TopAppBarSection>
        <TopAppBarSection align='end' role='toolbar'>
          <TopAppBarIcon actionItem tabIndex={0}>
            <MaterialIcon 
              hasRipple
              icon='search'
              onClick={() => console.log('[AppBar] search click')} />
          </TopAppBarIcon>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  </div>
);

export default AppBar;
