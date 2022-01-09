import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import { Link } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import ProfileIndex from './components/profiles/ProfileIndex'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Account from './components/auth/Account'
import ChatIndex from './components/chat/ChatIndex'
import ChatShow from './components/chat/ChatShow'
import ProfileShow from './components/profiles/ProfileShow'
import ProfileEdit from './components/profiles/ProfileEdit'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/potentialsniffs" element={<ProfileIndex />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/:userId/edit" element={<ProfileEdit />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<ChatIndex />} />
        <Route path="/chat/:chatId" element={<ChatShow />} />
        {/* <Route path="/*">
          <p>Page Not Found</p>
          <p>Head back to the <Link to="/potentialsniffs">Potential Sniffs</Link></p>
        </Route> */}
        <Route path="/potentialsniffs/:userId" element={<ProfileShow />} />
        <Route path="/account/:userId" element={<ProfileShow />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
