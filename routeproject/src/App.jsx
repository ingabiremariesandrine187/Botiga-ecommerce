import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout/>}>
        
      <Route path='/' index element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
        </Route>
       </Routes>
    </BrowserRouter>
  )
}
export default App
