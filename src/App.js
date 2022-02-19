import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  /**
   * マウント
   * オブジェクト生成
   * @param {*} props 
   */
  constructor(props){
    super(props)
    console.log('constructor');
    console.log('オブジェクト生成');
  }
  
  /**
   * コンポーネントがDOMにマウントされる直前
   */
  componentWillMount () {
    console.log('componentWillMount');
    console.log('コンポーネントがDOMにマウントされる直前');
  }

  /**
   * コンポーネントがDOMがマウントされた直後
   */
  componentDidMount () {
    console.log('componentDidMount');
    console.log('コンポーネントがDOMがマウントされた直後');
  }

  /**更新
   * コンポーネントのプロパティが変更されたとき
   * @param {*} nextProps 
   */
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps');
    console.log('コンポーネントのプロパティが変更されたとき');
    console.log(nextProps);
  }

  /**
   * コンポーネントの外観を更新していいか判断する時
   * @param {*} nextProps 
   * @param {*} nextState 
   */
  shouldComponentUpdate (nextProps,nextState) {
    console.log('shouldComponentUpdate');
    console.log('コンポーネントの外観を更新していいか判断する時');
    console.log(nextProps);
    console.log(nextState);

    return true
  }

  /**
   * コンポーネントが更新される直前
   */
  componentWillUpdate () {
    console.log('componentWillUpdate');
    console.log('コンポーネントが更新される直前');
  }

  /**
   * コンポーネントが更新された直後？
   */
  componentDidUpdate () {
    console.log('componentDidUpdate');
    console.log('コンポーネントが更新された直後？');
  }

  /**
   * アンマウント
   */
  componentWillUnmount () {
    console.log('componentWillUnmount');
  }

  /**
   * コンポーネントを描画
   */
  render () {
    console.log('render');
    const setStateHandler = (e) => {
      console.log('* call setState()');
      this.setState({r: Math.random()})
    }
    return (
      <div>
        <button onClick={setStateHandler}>
          setState
        </button>
      </div>
    )
  }

}


export default App;
