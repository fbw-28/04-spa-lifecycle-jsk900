import React from 'react';

const Header = ({ navigation }) => {
  return (
    <header>
      <h1>User Search App</h1>
      <button
        className='linkButton'
        name='search'
        onClick={(e) => navigation(e)}>
        Search
      </button>
      <button
        className='linkButton'
        name='about'
        onClick={(e) => navigation(e)}>
        About
      </button>
    </header>
  );
};

export default Header;
