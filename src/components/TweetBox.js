import React from 'react';
import './TweetBox.css';
import Tweet from './Tweet';
import Credentials from './Credentials';

class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.credentials = React.createRef();
    this.tweet = React.createRef();
  }

  handleClick() {
    this.tweet.current.changeIndex();
  }

  render() {
    return (
      <div className="tweetBox">
        <h1>Auto-Generated Tweets!</h1>
        <Credentials ref={this.credentials}/>
        <Tweet ref={this.tweet}/>
        <button onClick={this.handleClick}>Generate a Tweet!</button>
      </div>
    );
  }
}

export default TweetBox;
