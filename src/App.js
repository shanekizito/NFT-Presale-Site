import React from 'react'

import Dashboard from '../src/Components/Dashboard'
import Home from '../src/Components/Home'
import {Link , BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../src/Components/Navigation'
const App = () => {
  return (
    <>
      <Router>
        <Navigation />
          <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/dashboard'  element={<Dashboard/>} />
          </Routes>
      </Router>
    </>
  )
}

export default App
