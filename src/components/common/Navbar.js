/* eslint-disable indent */
import React from 'react'
import Hamburger from 'hamburger-react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, removeToken } from '../../lib/auth'
import logoPurple from '../../assets/logoPurple.png'

import { Button } from '@mui/material'

function Navbar() {
  const navigate = useNavigate()
  const isAuth = isAuthenticated()
  const [sidebarShow, setSidebarShow] = React.useState(false)

  const handleSideBar = () => setSidebarShow(!sidebarShow)


  const handleLogout = () => {
    removeToken()
    navigate('/')
  }



  return (
    <>
    <nav className="nav nav-toggle">
    <Link to="/"><img src={logoPurple} className='nav-logo'></img></Link>

    {isAuth ? (
      <>
        <Link to="/potentialsniffs" className="nav-item nav-item-left">Potential Sniffs</Link>
        <Link to="/chat" className="nav-item">Chats</Link>
        <div className="nav-buttons">
        <Link to="/account" className="nav-item">Account</Link>
        <Button className="nav-item-button" id="purple-button" onClick={handleLogout} variant="contained">Log Out</Button>
        </div>
      </>
    ) : (
      <div className="nav-buttons">
        <Button href="/register" className="nav-item-button" id="purple-button-side">Register</Button>
        <Button href="/login" className="nav-item-button" id="purple-button-side">Log In</Button>
      </div>
    )}
    </nav>

    <nav className="nav burger-toggle">
    <Link to="/"><img src={logoPurple} className='nav-logo'></img></Link>
    <div className="burger-icon" onClick={handleSideBar}>
    <Hamburger toggled={sidebarShow} toggle={setSidebarShow} />
    </div>

      <div className={
          sidebarShow
            ? 'side-nav-menu-container active'
            : 'side-nav-menu-container'
        }>
          <div onClick={handleSideBar}>
          {isAuth ? (
          <>
          <p><Link to="/potentialsniffs" className="nav-item nav-item-left">Potential Sniffs</Link></p>
          <p><Link to="/chat" className="nav-item">Chats</Link></p>
          <p><Link to="/account" className="nav-item">Account</Link></p>
          <p><Button className="nav-item-button" id="purple-button" onClick={handleLogout} variant="contained">Log Out</Button></p>
          </>
          ) : (
            <div className="auth-burger">
            <p><Button href="/register" className="nav-item-button" id="purple-button-auth">Register</Button></p>
            <p><Button href="/login" className="nav-item-button" id="purple-button-auth">Log In</Button></p>
            </div>
          )}
          </div>

      </div>
    </nav>
    </>
  )
}

export default Navbar
