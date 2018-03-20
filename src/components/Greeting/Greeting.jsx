import React, { Component } from 'react';
export default class Greeting extends Component {

  render() {
    // 通过 this 访问 props 和 state
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
