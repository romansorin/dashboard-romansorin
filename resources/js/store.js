import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

// import {

// } from './reducers'

const reducers = combineReducers({})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(reducers, allStoreEnhancers)

export default store
