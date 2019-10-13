import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'
import React, { useEffect } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Welcome from './components/Welcome'
import Verify from './components/Verify'

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/verify' component={Verify} />
        <Route path='/home' component={Home} />
        <Route path='/' component={Welcome} />
      </Switch>
    </div>
  )
}

export default hot(App)
