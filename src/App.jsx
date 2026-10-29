import './App.css'
import Home from './components/home/home';
import Products from "./components/products/Products";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/shared/Navbar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { Toaster } from 'react-hot-toast';
import React from 'react';
function App() {

  return (
    <React.Fragment>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/products' element={<Products />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    </Router>
    <Toaster position='bottom-center'/>
  </React.Fragment>
  )
}

export default App
