import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

function Avatar({ hash }) { 
  const url = require(`../images/${hash}`)
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar"
    />
  ); 
}

// propType validation
// ---------------------------
Avatar.propTypes = {
  hash: PropTypes.string.isRequired
};

export default Avatar;