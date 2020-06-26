import React from 'react';
import './App.css';
import TweetBox from './components/TweetBox.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TweetBox />
      </div>
    );
  }
}

export default App;
