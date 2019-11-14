
import NavitationListItem from './NavitationListItem';

import { pages } from '../../../utils/links';
import theme from '../../../styles/theme';

const NavigationItemList = () => (
  <ul>
    { Object.entries(pages).map(([key, value]) => (
      <NavitationListItem
        key={key}
        caption={value.caption}
        href={value.href}
        as={value.as} />
    )) }
    <style jsx>{`
      ul {
        display: flex;
        font-size: 16px;
      }
      ul:hover {
        color: #9e9e9e;
        ${theme.linkHoveringEffect}
      }
      @media screen and (max-width: 920px) {
        ul {
          position: absolute;
          left: 0;
          right: 0;
          top: 64px;

          width: 100%;
          justify-content: space-evenly;
        }
      }
    `}</style>
  </ul>
);

export default NavigationItemList;
