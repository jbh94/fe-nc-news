import React from 'react';
import * as api from '../api';
import Loading from './Loading';

class Users extends React.Component {
  state = {
    user: null,
    isLoading: true
  };

  render() {
    const { user, isLoading } = this.state;
    if (isLoading) return <Loading />;
    return (
      <div className="container">
        <h2>Welcome to {user.user.username}'s user profile!</h2>
        <p>
          <strong>Name: </strong>
          {user.user.name}
        </p>
        <img src={user.user.avatar_url} alt={user.username} />
      </div>
    );
  }
  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    const { username } = this.props;
    api.getUser(username).then(user => {
      this.setState({ user, isLoading: false });
    });
  };
}

export default Users;
