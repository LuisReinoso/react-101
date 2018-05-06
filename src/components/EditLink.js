import React, { Component, PropTypes } from 'react';

class EditLink extends Component {

  constructor(props) {
    super(props);

    this.onEdit = this.onEdit.bind(this);
    // Set your initial state here
    // this.setState = {};

    // Bind your custom methods so you can access the expected 'this'
    // this.myCustomMethod = this.myCustomMethod.bind(this);
  }
  onEdit() {
    var tweet = this.props.tweet;

    function updateTweet(params) {
      lore.actions.tweet.update(tweet, params);
    }

    lore.dialog.show(function() {
      return lore.dialogs.tweet.update({
        model: tweet,
        onSubmit: updateTweet
      });
    });
  }

  render() {
    return (
      <a className="link" onClick={this.onEdit}>
        edit
      </a>
    );
  }
}

EditLink.propTypes = {
  tweet: PropTypes.object.isRequired
};

export default EditLink;
