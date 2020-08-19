import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

const RetweetBtn = ({ count }) => (
  <span className="grey-color-1">
    <span className="material-icons">sync_alt</span>
    <label>{getRetweetCount(count)}</label>
  </span>
);

function getRetweetCount(count) { 
  if (count > 0) {
    return (
      <span>
        <label>{count}</label>
      </span>
    );
  } else {
    return null; 
  }
}


// propType validation
// ---------------------------
RetweetBtn.propTypes = {
  count: PropTypes.number
};

export default RetweetBtn;