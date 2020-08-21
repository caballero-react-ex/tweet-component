import React from 'react';
import TweetList from './components/Tweet/TweetList';
import User from './components/User/User';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div 
      style={{
        zIndex: "40",
        width: "572px", 
        margin: "0px auto",
        paddingTop: "40px", 
        marginBottom: "20px",
        borderLeft: "1px solid #ccc",
        borderRight: "1px solid #ccc",
      }}
    >
      <Navbar/>
      <User/>
      <TweetList/>
    </div>
  )
}

export default App;
