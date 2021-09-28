import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import store from './store'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: store.getState()
    }
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <BrowserRouter basename="/react-qiankun">
        <Route path="/" exact render={() => (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Link to="/app-data">跳转链接</Link>
            </header>
          </div>
        )}>
        </Route>
        <Route path="/app-data" exact render={() => (
          <div className="App-Data">
            {`我姓${this.state.data.data.firstName}, 叫${this.state.data.data.lastName}`}
            <button onClick={() => this.props.dispatch({
              type: 'changeState',
              value: {
                firstName: 'lin',
                lastName: 'huanhuan'
              }
            })}>点击</button>
          </div>
        )}>
        </Route>
      </BrowserRouter>
    )
  }
  handleStoreChange(){
    this.setState({data: store.getState()}); // 触发setState重新获取store的数据
  }
}
function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(App);
