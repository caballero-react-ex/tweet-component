import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

function Avatar({ hash, size }) { 
  const url = require(`../images/${hash}`)
  const dynamicPadding = size >= 120 ? "5px solid white" : null;
  return (
    <img
      style={{height:`${size}px`, width:`${size}px`,  border: dynamicPadding}}
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