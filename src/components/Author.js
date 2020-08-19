import React from 'react';
import PropTypes from 'prop-types';

import VerifiedIcon from './Buttons/VerifiedIcon';
import './Author.css';

function Author({ author }) {
  const { name, handle, verified } = author;  
  return (
    <span className="author">
      <span className="name">{name}</span>
      {verified ? <VerifiedIcon/> : null }
      <span className="handle">@{handle}</span>
    </span>
  );
}

// propType validation
// ---------------------------
Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    verified: PropTypes.bool.isRequired
  }).isRequired
};

export default Author;