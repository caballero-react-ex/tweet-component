import React from 'react';
import './User.css';
import Avatar from '../Avatar';
import { userData } from '../../data/TweetData';
import Username from '../Username';
// import epictetus-bg from '../../images/epictetus';

function User() {
  const background = require(`../../images/${userData.bg}`)

  return (
    <div className="user" style={{position: "relative"}}>
      <div 
        className="user-pic" 
        // background-image: url("photographer.jpg"); /* The image used */
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          width: "100%", 
          height: "170px", 
          zIndex: "-1"
        }}
      >
      </div>
      <div style={{position: "absolute", top: "110px", paddingLeft: "10px", paddingRight: "10px"}}>
        
          <Avatar 
            hash={userData.avatar}
            size={120}
          />
        <Username />
        <p className="grey-color-2" style={{marginTop: "5px"}}>@{userData.handle}</p>
        <p>{userData.description}</p>
        <div className="flex">
          <span className="material-icons grey-color-1" style={{marginLeft: "-3px"}}>location_on</span>
          <span className="mr-1 grey-color-2">{userData.location}</span>
          <span className="material-icons grey-color-1 mr">link</span>
          <a 
            href="https://dailystoic.com/" 
            rel="noopener noreferrer"  
            target="_blank" 
            className="mr-1"
          >
            {userData.web}
          </a>
          <span className="material-icons grey-color-1 mr" style={{marginTop: "-5px"}}>cake</span>
          <span className="mr-1 grey-color-2" >{userData.born}</span>
          <span className="material-icons grey-color-1 mr">date_range</span>
          <span className="mr-1 grey-color-2">{userData.joined}</span>
        </div>
        <div className="flex" style={{marginTop: "14px"}}>
          <span  style={{fontWeight: "bold", marginRight: "5px"}}>{userData.following}</span><span className="grey-color-2 mr-2">Following</span>
          <span  style={{fontWeight: "bold", marginRight: "5px"}}>{userData.followers}</span><span className="grey-color-2 mr-2">Followers</span>
        </div>
      </div>
    </div>
  )
}

export default User;