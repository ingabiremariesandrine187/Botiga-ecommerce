
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Layout from './components/Layout'
import Shop from './components/Shop'
import Blog from './components/Blog'
import Vendors from './components/Vendors'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Singlepage from './components/Singlepage'
import Singleblog from './components/Singleblog'
import Singlehome from './components/Singlehome'
import Signup from './components/Signup';
import Homeproduct from './components/Homeproduct';
import DashboardLayout from './Dashboard/DashboardLayout';
import Dashboardview from './Dashboard/Dashboardview';

function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout/>}>
      <Route path='/' index element={<Home/>}/>
      <Route path='/shop' element={<Shop />} />
      <Route path='/Blog' element={<Blog />} />
      <Route path='/Vendors' element={<Vendors />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/View' element={<Homepage />} />
      <Route path='//singlecard/:id' element={<Singlepage/>}/>
      <Route path='//singleblog/:id' element={<Singleblog/>}/>
      <Route path='//singlehome/:id' element={<Singlehome/>}/>
      <Route path='/Sign-up' element={<Signup />} />
      <Route path='/homeproduct' element={<Homeproduct/>}/>
        </Route>
        <Route path='/' element={<DashboardLayout/>}>
      <Route path='/dashboard' index element={<Dashboardview/>}/>
      </Route>
       </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
