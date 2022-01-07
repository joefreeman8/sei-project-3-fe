import { Link } from 'react-router-dom'

function Navbar() {



  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/potentialsniffs">Profile Index</Link>
      <Link to="/login">Log In</Link>
      <Link to="/register">Register</Link>
      <Link to="/chat">Chat</Link>
    </nav>
  )
}

export default Navbar