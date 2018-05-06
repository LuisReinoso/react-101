import React, { Component, PropTypes } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);

    // Set your initial state here
    // this.setState = {};

    // Bind your custom methods so you can access the expected 'this'
    // this.myCustomMethod = this.myCustomMethod.bind(this);
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top header">
        <div className="container">
          <div className="navbar-header">
            <div className="navbar-brand">
              Lore Quickstart
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

Header.propTypes = {};

export default Header;
