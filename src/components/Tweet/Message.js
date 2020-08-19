import React from 'react';

function Message({ text }) {
  // const [ message ] = text;
  return (
    <div style={{marginTop: "5px"}}>
      {text}
    </div>
  );
}

export default Message;