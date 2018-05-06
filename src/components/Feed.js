import React, { Component, PropTypes } from 'react';
import Tweet from './Tweet';

class Feed extends Component {

  constructor(props) {
    super(props);

    // Set your initial state here
    // this.setState = {};

    // Bind your custom methods so you can access the expected 'this'
    // this.myCustomMethod = this.myCustomMethod.bind(this);
  }

  renderTweet(tweet) {
    return (
      <li key={tweet.id}>
        <Tweet key={tweet.id} tweet={tweet}/>
      </li>
    );
  }

  render() {
    const tweets = this.props.tweets;

    return (
      <div className="feed">
        <h2 className="title">
          Feed
        </h2>
        <ul className="media-list tweets">
          {tweets.data.map(this.renderTweet)}
        </ul>
      </div>
    )
  }
}

Feed.propTypes ={
  tweets: PropTypes.object.isRequired
};

Feed.defaultProps = (function() {
  const tweet = {
    id: 1,
    cid: 'c1',
    state: 'RESOLVED',
    data: {
      id: 1,
      user: 1,
      text: 'Nothing can beat science!',
      createdAt: '2016-10-04T05:10:49.382Z'
    }
  };

  return {
    tweets: {
      state: 'RESOLVED',
      data: [tweet]
    }
  }
})();


export default Feed;
