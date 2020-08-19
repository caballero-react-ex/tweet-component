import React from 'react';
// import PropTypes from 'prop-types';

import Avatar from '../Avatar';
import Author from '../Author';
import Time from './Time';
import Message from './Message';
// Buttons Imports
import RetweetBtn from '../Buttons/RetweetBtn';
import ReplyBtn from '../Buttons/ReplyBtn';
import LikeBtn from '../Buttons/LikeBtn';
import OptionsBtn from '../Buttons/OptionsBtn';

import './Tweet.css';


function Tweet({ data, user }) { 
  // const messages = data.tweets.map(tweet => 
  //   tweet.message,
  //   // console.log(tweet.message)
  // );
  
  // console.log(messages);
  

  return (
    <div className="tweet"> 
      <Avatar hash={user.avatar} />
      <div className="float">
        <div className="author-container">
          <Author user={user} /> 
          <Time time={data.timestamp} />
        </div>
        <Message 
          text={data.message}
        />
        <div className="buttons">
          <ReplyBtn />
          <RetweetBtn count={data.retweets}/>
          <LikeBtn count={data.likes} />
          <OptionsBtn />
        </div>
      </div>
    </div>
  ); 
}

export default Tweet;


// propType validation
// ---------------------------
// Tweet.propTypes = {
//   tweet: PropTypes.shape({
//     message: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     author: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       handle: PropTypes.string.isRequired,
//       verified: PropTypes.bool.isRequired
//     }).isRequired,
//     likes: PropTypes.number.isRequired,
//     retweets: PropTypes.number.isRequired,
//     timestamp: PropTypes.string.isRequired
//   }).isRequired
// }; // not very DRY :) 
