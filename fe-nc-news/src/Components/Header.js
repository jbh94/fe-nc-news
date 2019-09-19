import React from 'react';

function Header(props) {
  return (
    <div className="header">
      <div>
        <img
          className="header-logo"
          alt="Logo"
          src={require('../assets/newspaper.png')}
        />
      </div>
      <h1>NC News</h1>
      <form>
        <div>
          <select
            type="text"
            name="username"
            value={props.username}
            onChange={props.handleUser}
          >
            <option value="jessjelly"> jessjelly</option>
          </select>
        </div>
        <p>Logged in: {props.username}</p>
      </form>
    </div>
  );
}

export default Header;
