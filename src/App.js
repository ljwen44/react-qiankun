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
      data: store.getState(),
      unsubscribe: null
    }
    this.storeChange = this.storeChange.bind(this)
  }
  componentDidMount() {
    this.setState({
      unsubscribe: store.subscribe(this.storeChange)
    })
  }
  render() {
    const { data } = this.state.data
    const { handleStoreChange } = this.props
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
            {`我姓${data.firstName}, 叫${data.lastName}`}
            <button onClick={() => handleStoreChange()}>点击</button>
          </div>
        )}>
        </Route>
      </BrowserRouter>
    )
  }
  storeChange(){
    this.setState({data: store.getState()}); // 触发setState重新获取store的数据
  }
  componentWillUnmount() {
    this.state.unsubscribe()
  }
}
function mapStateToProps(state) {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleStoreChange: () => {
      dispatch({
        type: 'changeState',
        value: {
          firstName: 'lin',
          lastName: 'huanhuan'
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
