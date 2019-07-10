import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div>
      <h1>TapRoom</h1>
      <Link to="/">Home</Link> | <Link to="/newalc">Create Alcohol</Link>
    </div>
  );
}

export default Header;