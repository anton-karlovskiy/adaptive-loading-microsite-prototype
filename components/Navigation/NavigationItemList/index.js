
import NavitationListItem from './NavitationListItem';

import theme from '../../../styles/theme';

const navigationItems = [
  {
    id: 1,
    path: '/',
    title: 'Home'
  },
  {
    id: 2,
    path: '/react-hooks',
    title: 'React Hooks'
  },
  {
    id: 3,
    path: '/demos',
    title: 'Demos'
  },
  {
    id: 4,
    path: '/resources',
    title: 'Resources'
  }
];

const NavigationItemList = () => (
  <ul>
    { navigationItems.map(navigationItem => {
      const { id, title, path } = navigationItem;

      return (
        <NavitationListItem key={id} title={title} path={path} />
      );
    }) }
    <style jsx>{`
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        font-size: 16px;
      }
      ul:hover {
        color: #9e9e9e;
        ${theme.hoveringTransition}
      }
      @media screen and (max-width: 920px) {
        ul {
          padding: 0;
          width: 100%;
          justify-content: space-evenly
        }
      }
    `}</style>
  </ul>
);

export default NavigationItemList;
