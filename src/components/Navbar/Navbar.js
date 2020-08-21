import React from 'react';
import Username from '../Username';
import {userData} from '../../data/TweetData';

function Navbar() {
  return (
    
    <div className="flex navbar"
      style={{
        overflow: "hidden",
        position: "fixed",
        top: "0px",
        zIndex: "20",
        width:"inherit",
        backgroundColor: "white",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <span className="material-icons primary-color mr-2" style={{marginLeft: "15px"}}>arrow_back</span>
      <div>
        <Username/>
        <p className="grey-color-2" style={{fontSize: "14px", margin: "0px", marginTop: "2px"}}>{userData.totalTweets} Tweets</p>
      </div>
    </div>
  )
}

export default Navbar;