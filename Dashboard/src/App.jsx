import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout'
import DashboardContent from './components/Content';

function App() {
    return (
    <>
      <div>
      <BrowserRouter >
      <Routes>
        <Route path="/"  element={<Layout />}>
        
        <Route path='/' index element={<DashboardContent/>}/>
</Route>
    
    
    
    </Routes>
    </BrowserRouter>

        

       </div> 
    </>
  )
}

export default App
