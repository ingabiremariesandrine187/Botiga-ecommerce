
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Layout from './components/Layout'
import Shop from './components/Shop'
import Blog from './components/Blog'
import Vendors from './components/Vendors'
import Contact from './components/Contact'
import Footer from './components/Footer'
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
        </Route>
       </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App
