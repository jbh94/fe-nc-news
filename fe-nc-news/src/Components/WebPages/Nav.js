import React from 'react';
import { Link } from '@reach/router';

function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link className="link-style" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link-style" to="/topics">
            Topics
          </Link>
        </li>
        <li>
          <Link className="link-style" to="/articles">
            Articles
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
