import { Link } from 'preact-router/match';

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link activeClassName="active" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link activeClassName="active" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link activeClassName="active" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
