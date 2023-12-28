import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import {Routes,Route} from "react-router-dom"
import Destination from './pages/destination/Destination'
import Crew from './pages/crew/Crew'
import Technology from './pages/technology/Technology'
function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/HOME' element={<Home />} />
      <Route path='DESTINATION' element={<Destination />} />
      <Route path='CREW' element={<Crew />} />
      <Route path='TECHNOLOGY' element={<Technology />} />
    </Routes>
  )
}

export default App
