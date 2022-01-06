import { Link } from 'react-router-dom'

function Navbar() {



  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/potentialsniffs">Profile Index</Link>
    </nav>
  )
}

export default Navbar