
import Link from 'next/link';

const NavitationListItem = ({ title, path }) => (
  <li>
    <Link href={path}>
      <a>{title}</a>
    </Link>
    <style jsx>{`
      li:hover {
        color: #fff;
      }
      @media only screen and (min-width: 921px) {
        a {
          line-height: 72px;
          padding: 0 16px;
          display: inline-block;
        }
      }
    `}</style>
  </li>
);

export default NavitationListItem;
