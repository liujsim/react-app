import React, { Component } from 'react';
export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.state = { name: 'Hello world!' };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  preventPop(name, e) {    //事件对象e要放在最后
    e.preventDefault();
    alert(name);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <a href="https://reactjs.org" onClick={this.preventPop.bind(this, this.state.name)}>Click</a>
      </div>
    );
  }
}
