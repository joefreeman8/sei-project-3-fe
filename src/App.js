import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import ProfileIndex from './components/profiles/ProfileIndex'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Account from './components/auth/Account'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/potentialsniffs" element={<ProfileIndex />} />
        <Route path="/account" element={<Account />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
