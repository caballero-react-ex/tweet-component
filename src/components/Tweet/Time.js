import React from 'react';
import moment from 'moment';

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span style={{paddingLeft: ".3em"}} className="grey-color-2">
      &#183; {timeString}
    </span>
  )
};

export default Time;