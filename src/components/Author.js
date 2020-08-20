import React from 'react';
import PropTypes from 'prop-types';

import VerifiedIcon from './Buttons/VerifiedIcon';
import './Author.css';

function Author({user}) {
  const { name, handle, verified } = user;  
  return (
    <span className="author">
      <span className="name">{name}</span>
      {verified ? <VerifiedIcon size={22} color={"red"}/> : null }
      <span className="handle">@{handle}</span>
    </span>
  );
}

// propType validation
// ---------------------------
Author.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    verified: PropTypes.bool.isRequired
  }).isRequired
};

export default Author;