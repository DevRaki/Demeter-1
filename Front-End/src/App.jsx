import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Menú
import Navbar from './components/Navbar.jsx'
import Encabezado from './components/Encabezado.jsx'

function App() {
  return (
    <BrowserRouter>
      {/* <div className="flex"> */}
      <Navbar />
      <Encabezado />
      {/* <main className='container mx-auto px-10 flex-grow'> */}
      <Routes>
        <Route path='/' element={<h1>DASHBOARD</h1>} />
      </Routes>
      {/* </main>
          </div> */}
    </BrowserRouter>
  )
}

export default App
