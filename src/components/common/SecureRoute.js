import { Redirect, Route } from 'react-router'
import { isAuthenticated,removeToken } from '../../lib/auth'

function SecureRoute({ component: Component, ...rest }) {
  if (!isAuthenticated()) {
    return <Route component={Component} {...rest} />
  }
  removeToken()
  return <Redirect to='/login' />
}

export default SecureRoute