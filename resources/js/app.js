import { hot } from 'react-hot-loader/root'
import React, { useEffect } from 'react'
import Example from './components/Example'

const App = () => {
  useEffect(() => {
    alert('hello world')
  }, [])
  return (
    <div className='App'>
      <Example />
    </div>
  )
}

export default hot(App)
