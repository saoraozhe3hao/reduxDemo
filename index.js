import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory  ,Router, Route, IndexRoute} from 'react-router';
import Reducers from './reducers'
import Left from "./containers/left"
import Right from "./containers/right"
import Sub from "./containers/sub"

// 合并reducers被调用时，会依次调用拆分的reducer，直到state发生变化
const store = createStore(Reducers);
const history = syncHistoryWithStore(hashHistory , store);

// provider内 只能容乃一个 容器组件
ReactDOM.render(
    <div>
        <Provider store={store}>
            <Left />
        </Provider>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Right}>
                    <IndexRoute component={Sub} />
                </Route>
            </Router>
        </Provider>
    </div> ,
  document.getElementById('root')
);
