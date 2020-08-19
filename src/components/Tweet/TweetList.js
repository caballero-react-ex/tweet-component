import React from 'react';
import Tweet from './Tweet';
import {userData, tweetData } from '../../data/TweetData';

function TweetList() {
  return (
    <div>
      {tweetData.map(data => (
        <Tweet 
          data={data} 
          user={userData}
          key={data.timestamp}
        />
      ))}
    </div>
  )
}

export default TweetList;

// <Tweet tweet={tweetData} /> 
