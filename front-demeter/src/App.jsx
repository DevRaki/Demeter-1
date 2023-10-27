import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SupplierPage from './Pages/SupplierPage.jsx'
import { Supplier } from './Context/Supplier.context.jsx'
import Login from './Pages/Login.jsx'

// Menu & Header
import Navbar from './Components/Navbar.jsx'
import Header from './components/Header.jsx'


function App() {
  return (
    <BrowserRouter>
      <Supplier>
        <Navbar />
        <Header />
        <Routes>
          <Route path='/supplier' element={<SupplierPage />} />
        </Routes>
      </Supplier>
    </BrowserRouter>
    /* <Login/> */
  )
}

export default App
