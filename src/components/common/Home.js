//import logoPurple from '../../assets/logoPurple.png'
import { Button } from '@mui/material'
import { isAuthenticated } from '../../lib/auth'


function Home() {
  const isAuth = isAuthenticated()


  return (
    <section className="hero">
      <div className="hero-row-one">
        <h2>Dating for every floof and snoot</h2>
      </div>
      {/* <div className="hero-row-two">
        <img src={logoPurple} className="logo"></img>
      </div> */}
      <div className="hero-row-three">
        <h4>Sniff is the one and only app for bringing paws together.</h4>
        <h4>We are dedicated to connecting you on what matters.</h4>
        {isAuth? (
          <Button href="/potentialsniffs"><button className="join-button" id="purple-button-auth" variant="contained" to="/potentialsniffs">View Your Potential Sniffs</button></Button>
        ) :
          <Button href="/register"><button className="join-button" id="purple-button-auth" variant="contained" to="/register">Join Sniff</button></Button>
        }
        
      </div>
    </section>
  )
}

export default Home