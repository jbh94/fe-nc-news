import React from 'react';
import { Link } from '@reach/router';

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
        <div className="user-header">
          <select
            readOnly
            className="header-button"
            type="text"
            value={props.username}
            onChange={props.handleUser}
          >
            <option> jessjelly</option>
          </select>
          <p>
            Logged in: {props.username}
            <br></br>
            <br></br>
            <button className="header-button">
              <Link
                className="header-button-profile"
                to={`/users/${props.username}`}
              >
                View Profile
              </Link>
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Header;
