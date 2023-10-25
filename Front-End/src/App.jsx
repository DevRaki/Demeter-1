import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Menú
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Form />
      <Routes>
        <Route path='/' element={<h1>DASHBOARD</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
