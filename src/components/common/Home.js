import { Link } from 'react-router-dom'


function Home() {


  return (
    <section className="hero">
      <div>
        <h1>Sniffers</h1>
      </div>
      <div>
        <h2>Dating for every single floof and snoot</h2>
      </div>
      <h4>Sniffers is the one and only app for bringing paws together.</h4>
      <h4>We are dedicated to connecting you on what matters.</h4>
      <div>
        <button className="join-button" variant="contained"><Link to="/register">Join Sniffers</Link></button>
      </div>
    </section>
  )
}

export default Home