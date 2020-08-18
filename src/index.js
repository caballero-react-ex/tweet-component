import React from 'react';
import ReactDOM from 'react-dom'; 
import moment from 'moment';
import './index.css';

function Tweet({ tweet }) { 
  return (
    <div className="tweet"> 
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} /> <Time time={tweet.timestamp} />
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
  message: "Cats will conquer the world...",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2, 
  retweets: 10,
  timestamp: "2020-07-30 21:24:37" 
};

function Avatar({ hash }) { 
  const url = `https://gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar" 
    />
  ); 
}

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

function Author({ author }) {
  const { name, handle } = author;  
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">{timeString}</span>
  )
};

const ReplyBtn = () => (
  <span class="material-icons">reply</span>
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
    <span class="material-icons">sync_alt</span>
    <label>{getRetweetCount(count)}</label>
  </span>
);

const LikeBtn = ({ count }) => (
  <span>
    <span class="material-icons">favorite</span>
    {/* <label>{count}</label> */}
    {count > 0 && <label> { count } </label>}
  </span>
);

const OptionsBtn = () => (
  <span class="material-icons">more_horiz</span>
);

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'));