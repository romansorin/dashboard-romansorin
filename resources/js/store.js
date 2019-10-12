import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

// import {

// } from './reducers'

const reducers = combineReducers({})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(reducers, allStoreEnhancers)

export default store
