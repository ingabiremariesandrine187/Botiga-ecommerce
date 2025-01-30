import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from './footer'
function Layout() {
    return(
        <div>
   <Navbar/>
   <Outlet/>
   <Footer/>
        </div>
    )
}
export default Layout