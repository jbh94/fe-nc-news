import React from 'react';
import { Link } from '@reach/router';

function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link className="link-style" to="/">
            Latest
          </Link>
        </li>
        <li>
          <Link className="link-style" to="/">
            Topics
          </Link>
        </li>
        <li>
          <Link className="link-style" to="/">
            Articles
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
