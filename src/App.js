import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages'
import Contact from './pages/contactUs'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
           <Route path="/" element={<Home/>}  exact />
           <Route path="/contactus" element={<Contact/>} exact />
      </Routes>  
    </BrowserRouter>
  )
}

export default App
