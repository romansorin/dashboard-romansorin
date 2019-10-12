import 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import App from './App.js'

const token = document.head.querySelector('meta[name="csrf-token"]')

axios.defaults.headers.common = {
  'X-CSRF-TOKEN': token.content,
  'X-Requested-With': 'XMLHttpRequest'
}

ReactDOM.render(<App />, document.getElementById('root'))

/**
 * Webpack Hot Module Replacement API
 */
if (module.hot) {
  module.hot.accept()
}
