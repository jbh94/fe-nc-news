import React from 'react';
import { Link } from '@reach/router';

class UsersPage extends React.Component {
  state = {
    user: null,
    isLoading: true
  };
  render() {
    const { username } = this.props;

    console.log(username);
    console.log(this.props);

    return (
      <div className="article-container">
        <h1>List of all current users:</h1>
        <h2>
          <Link className="link-styles" to={`/users/${username}`}>
            Jess Jelly
          </Link>
        </h2>
      </div>
    );
  }
}
export default UsersPage;
