import React, { Component } from 'react';
import logo from './logo.svg';
import Clock from '../../components/Clock'
import Toggle from '../../components/Toggle'
import Greeting from '../../components/Greeting'
import LoginControl from '../../components/LoginControl'

export default class Home extends Component {
  constructor(props) {
    super(props);
    // 构造函数是唯一能够初始化 this.state 的地方。
    this.state = { date: new Date() };
  }
  // 生命周期钩子
  componentDidMount() {

    this.timerID = setInterval(
      () => this._tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  _tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      // 因为 JSX 的特性更接近 JavaScript 而不是 HTML , 所以 React DOM 使用 camelCase 小驼峰命名 来定义属性的名称，而不是使用 HTML 的属性名称。
      // 例如，class 变成了 className，而 tabindex 则对应着 tabIndex。
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Toggle />
        <Clock/>
        <Clock />
        <Greeting isLoggedIn={true}/>
        <LoginControl />
        <NumberList numbers={numbers} />
      </div>
    )
  }
}

const numbers = [1, 2, 3, 4, 5];

// JSX允许在大括号中嵌入任何表达式
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}


