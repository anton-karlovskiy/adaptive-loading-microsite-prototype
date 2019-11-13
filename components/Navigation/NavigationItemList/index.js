
import NavitationListItem from './NavitationListItem';

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
        font-size: 16px;
      }
    `}</style>
  </ul>
);

export default NavigationItemList;
