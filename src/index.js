import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'

import store from './store' 

function render(props={}) {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    props.container ? props.container.querySelector('#root') : document.getElementById('root')
  );
}

var __webpack_public_path__ = null
if (window.__POWERED_BY_QIANKUN__) {
	__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  console.log("react: " + __webpack_public_path__)
}
if (!window.__POWERED_BY_QIANKUN__) {
	render()
}
export async function bootstrap() {
	
}

export async function mount(props) {
  store.dispatch({
    type: 'InitState',
    value: props.state
  })
	render(props)
}

export async function unmount(props={}) {
	ReactDOM.unmountComponentAtNode(props.container ? props.container.querySelector('#root') : document.getElementById('root'))
}