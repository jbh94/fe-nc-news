import React from 'react';

function Header() {
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
    </div>
  );
}

export default Header;
