import React from 'react';

class UsersPage extends React.Component {
  state = {
    user: null,
    isLoading: true
  };

  render() {
    return (
      <div>
        <h1>List of all current users:</h1>
      </div>
    );
  }
}
export default UsersPage;
