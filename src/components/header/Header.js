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
      </ul>
    </div>
  );
}
