
import Link from 'next/link';
import { useRouter } from 'next/router';

import theme from '../../../../styles/theme';

const NavitationListItem = ({ title, path }) => {
  const { asPath } = useRouter();

  return (
    <li>
      <Link href={path}>
        <a>
          {title}
          <span />
        </a>
      </Link>
      <style jsx>{`
        li:hover {
          color: #fff;
          ${theme.hoveringTransition}
        }
        a {
          position: relative;
          ${theme.hoveringTransition}
        }
        a > span {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 4px;
          background: #fff;
          transform: scaleY(${asPath === path ? 1 : 0});
          transform-origin: bottom;
          transition: transform 235ms cubic-bezier(.4,0,.2,1);
        }
        @media only screen and (min-width: 921px) {
          a {
            line-height: 72px;
            margin: 0 16px;
            display: inline-block;
          }
        }
      `}</style>
    </li>
  );
};

export default NavitationListItem;
