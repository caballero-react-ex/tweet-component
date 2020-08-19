import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

const LikeBtn = ({ count }) => (
  <span className="grey-color-1">
    <span className="material-icons">favorite</span>
    {count > 0 && <label> { count } </label>}
  </span>
);

// propType validation
// ---------------------------
LikeBtn.propTypes = {
  count: PropTypes.number
};

export default LikeBtn;