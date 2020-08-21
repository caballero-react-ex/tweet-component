import React from 'react';
import { userData } from '../data/TweetData';
import VerifiedIcon from './Buttons/VerifiedIcon';

function Username() {

  return (
    <div className="flex">
      <span style={{
        fontSize: "22px", 
        fontWeight: "bold",
        marginRight: "3px"
      }}
        className="sans-font"
      >
        {userData.name}
      </span>
      <VerifiedIcon size={28}/>
    </div>
  )
}

export default Username;