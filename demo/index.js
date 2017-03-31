import '../utils/object-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import Demo from './pages'
import D_Loadmore from './pages/loadmore'
import D_TodoList from './pages/todolist'
import { browserHistory, Router, Route, Link, hashHistory } from 'react-router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from '../app/reducers'
import configureStore from '../app/store/configureStore'

//let store = createStore(reducers)
const store = configureStore()
ReactDom.render(
    <Provider store={store}>
        <Router history = { hashHistory }>
            <Route path="/" component={ Demo } />
            <Route path="/loadmore" component={ D_Loadmore } />
            <Route path='/todolist' component={ D_TodoList } />
        </Router>
    </Provider>,
    document.getElementById('app')
)
