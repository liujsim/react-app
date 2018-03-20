import React, { Component } from 'react';
export default class Greeting extends Component {

  render(props) {
    const isLoggedIn = this.props.isLoggedIn;
    let word = null;
    if (isLoggedIn) {
      word = 'Welcome back!'
    } else {
      word = 'Please sign up'
    }
    return (
      <div>
        {word}
      </div>
    );
  }
}
