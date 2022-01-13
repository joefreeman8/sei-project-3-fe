import { Button } from '@mui/material'
import { isAuthenticated } from '../../lib/auth'


function Home() {
  const isAuth = isAuthenticated()


  return (
    <section className="hero">
      <div className="hero-row-one">
        <h2>Dating for every floof and snoot</h2>
      </div>
      <div className="hero-row-three">
        <h4>Sniff is the one and only app for bringing paws together.</h4>
        <h4>We are dedicated to connecting you on what matters.</h4>
        {isAuth ? (
          <Button href="/potentialsniffs" className="nav-item-button" id="purple-button-auth">View Your Potential Sniffs</Button>
        ) :
          <Button href="/register" className="nav-item-button" id="purple-button-auth">Join Sniff</Button>
        }
        
      </div>
    </section>
  )
}

export default Home