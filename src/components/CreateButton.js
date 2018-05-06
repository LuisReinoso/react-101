import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class CreateButton extends Component {

  constructor(props) {
    super(props);

    // Set your initial state here
    // this.setState = {};

    // Bind your custom methods so you can access the expected 'this'
    // this.myCustomMethod = this.myCustomMethod.bind(this);
  }

  onClick() {
    function createTweet(params) {
      lore.actions.tweet.create(_.extend(params, {
        userId: 1,
        createdAt: new Date().toISOString()
      }));
    }

    lore.dialog.show(function() {
      return lore.dialogs.tweet.create({
        onSubmit: createTweet
      });
    });
  }

  render () {
    return (
      <button
        type="button"
        className="btn btn-primary btn-lg create-button"
        onClick={this.onClick}>
        +
      </button>
    );
  }
}

CreateButton.propTypes = {};

export default CreateButton;
