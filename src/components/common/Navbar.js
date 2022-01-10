import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, removeToken } from '../../lib/auth'
import logoPurple from '../../assets/logoPurple.png'


function Navbar() {
  // const { pathname } = useLocation()
  const navigate = useNavigate()
  const isAuth = isAuthenticated()

  const handleLogout = () => {
    removeToken()
    navigate('/')
  }

  return (
    <nav>
      <Link to="/"><img src={logoPurple} className='nav-logo'></img></Link>
      {isAuth && (
        <>
          <Link to="/potentialsniffs">Profile Index</Link>
          <Link to="/account">Account</Link>
          <Link to="/chat">Messages</Link>
        </>
      )}
      {isAuth ? (
        <button onClick={handleLogout}>
          Log Out
        </button>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Log In</Link>
        </>
      )}
    </nav>
  )
}

export default Navbar