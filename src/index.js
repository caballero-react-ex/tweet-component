import React from 'react';
import ReactDOM from 'react-dom'; 
import moment from 'moment';
import PropTypes from 'prop-types';
import './index.css';

function Tweet({ tweet }) { 
  return (
    <div className="tweet"> 
      <Avatar hash={tweet.avatar} />
      <div className="float">
        <div className="author-container">
          <Author author={tweet.author} /> 
          <Time time={tweet.timestamp} />
        </div>
        <Message text={tweet.message} /> 
        <div className="buttons">
          <ReplyBtn />
          <RetweetBtn count={tweet.retweets}/>
          <LikeBtn count={tweet.likes} />
          <OptionsBtn />
        </div>
      </div>
    </div>
  ); 
}

const testTweet = {
  message: "Wealth consists not in having great possessions, but in having few wants...",
  avatar: "jAou3JvwalM",
  author: {
    handle: "stoic-philosopher",
    name: "Epictetus", 
    verified: true,
  },
  likes: 5, 
  retweets: 10,
  timestamp: "2020-07-30 21:24:37" 
};

Tweet.propTypes = {
  tweet: PropTypes.shape({
    message: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired,
      verified: PropTypes.bool.isRequired
    }).isRequired,
    likes: PropTypes.number.isRequired,
    retweets: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired
  }).isRequired
}; // not DRY :) 

function Avatar({ hash }) { 
  const url = `https://source.unsplash.com/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar"
    />
  ); 
}

Avatar.propTypes = {
  hash: PropTypes.string.isRequired
};

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

function Author({ author }) {
  const { name, handle, verified } = author;  
  return (
    <span className="author">
      <span className="name">{name}</span>
      {verified ? <Verified/> : null }
      <span className="handle">@{handle}</span>
    </span>
  );
}

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    verified: PropTypes.bool.isRequired
  }).isRequired
};

const Verified = () => (
  <span className="material-icons primary-color">verified</span>
);

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">&#183; {timeString}</span>
  )
};

const ReplyBtn = () => (
  <span className="material-icons">reply</span>
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

const RetweetBtn = ({ count }) => (
  <span>
    <span className="material-icons">sync_alt</span>
    <label>{getRetweetCount(count)}</label>
  </span>
);

RetweetBtn.propTypes = {
  count: PropTypes.number
};

const LikeBtn = ({ count }) => (
  <span>
    <span className="material-icons">favorite</span>
    {count > 0 && <label> { count } </label>}
  </span>
);

LikeBtn.propTypes = {
  count: PropTypes.number
};

const OptionsBtn = () => (
  <span className="material-icons">more_horiz</span>
);


ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'));