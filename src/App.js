import React from 'react';
import TweetList from './components/Tweet/TweetList';
import User from './components/User/User';

function App() {
  return (
    <div style={{width: "564px", margin: "20px auto"}}>
      <User/>
       <TweetList/>
    </div>
  )
}

export default App;
