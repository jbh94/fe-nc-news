import React from 'react';
import { Link } from '@reach/router';
import { Icon } from '@iconify/react';
import blueBook from '@iconify/icons-emojione/blue-book';
import booksIcon from '@iconify/icons-emojione/books';
import speakingHead from '@iconify/icons-twemoji/speaking-head';

const Homepage = () => {
  return (
    <>
      <div className="homepage-wrapper">
        <h2>Northcoders News</h2>
        <div className="row">
          <div className="column">
            <Icon className="homepage-icon" icon={speakingHead}></Icon>
            <Link className="link-style" to="/articles/">
              <h1>Articles</h1>
            </Link>
            <p>Latest posts</p>
          </div>
          <div className="column">
            <Icon className="homepage-icon" icon={blueBook}></Icon>
            <Link className="link-style" to="/topics/">
              <h1>Topics</h1>
            </Link>
            <p>Choose from our topic list</p>
          </div>
          <div className="column">
            <Icon className="homepage-icon" icon={booksIcon}></Icon>
            <Link className="link-style" to="/users/">
              <h1>Users</h1>
            </Link>
            <p>View current users</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
