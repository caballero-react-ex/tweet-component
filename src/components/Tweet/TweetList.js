import React from 'react';
import Tweet from './Tweet';
import tweetData from '../../data/TweetData';

function TweetList() {
  return (
    <Tweet tweet={tweetData} />
  )
}

export default TweetList;

