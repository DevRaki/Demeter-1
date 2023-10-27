import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import SupplierPage from './Pages/SupplierPage.jsx'
import { Supplier } from './Context/Supplier.context.jsx'
import Login from './Pages/Login.jsx'
import './App.css'


function App() {


  return (
    <>
    <BrowserRouter>
    <Supplier>
    <Navbar/> 
    <Routes>
      <Route path='/supplier' element={<SupplierPage/>}/>
     
      
    </Routes>
    </Supplier>
    </BrowserRouter>
   
    </>
  )
}

export default App
