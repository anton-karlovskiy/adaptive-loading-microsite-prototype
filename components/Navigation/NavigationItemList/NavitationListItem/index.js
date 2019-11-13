
import Link from 'next/link';

const NavitationListItem = ({ title, path }) => (
  <li>
    <Link href={path}>
      <a>{title}</a>
    </Link>
    <style jsx>{`
      li {
        display: inline-block;
        *display:inline; /* this fix is needed for IE7- */
      }
      a {
        padding: 0 16px;
      }
    `}</style>
  </li>
);

export default NavitationListItem;
