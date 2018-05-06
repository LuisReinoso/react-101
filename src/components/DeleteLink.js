import React, { Component, PropTypes } from 'react';

class DeleteLink extends Component {

  constructor(props) {
    super(props);
    this.onDestroy = this.onDestroy.bind(this);
    // Set your initial state here
    // this.setState = {};

    // Bind your custom methods so you can access the expected 'this'
    // this.myCustomMethod = this.myCustomMethod.bind(this);
  }

  onDestroy() {
    var tweet = this.props.tweet;

    function destroyTweet() {
      lore.actions.tweet.destroy(tweet);
    }

    lore.dialog.show(function() {
      return lore.dialogs.tweet.destroy({
        model: tweet,
        onSubmit: destroyTweet
      });
    });
  }

  render() {
    return (
      <a className="link" onClick={this.onDestroy}>
        delete
      </a>
    )
  }
}

DeleteLink.propTypes = {
  tweet: PropTypes.object.isRequired
};

export default DeleteLink;
