import React from "react";
import { useState } from "react";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";
import Headerbar from "../components/Headerbar";
import Sidebar from "./Sidebar";

function Layout()
{
    return(
        <>
        
<Headerbar/>
<Sidebar/>
<Outlet/>
<Footer/>
</>
    )
}
export default Layout;