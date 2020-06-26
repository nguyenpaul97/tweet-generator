import React from 'react';
import './TweetBox.css';
import Tweet from './Tweet';

class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.tweet = <Tweet/>;
  }

  handleClick(event) {
    this.tweet.changeIndex();
  }

  render() {
    return (
      <div className="tweetBox">
        <h1>TweetBox here</h1>
        {this.tweet}
        <button onClick={this.handleClick}>Generate a Tweet!</button>
      </div>
    );
  }
}

export default TweetBox;
