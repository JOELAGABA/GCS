import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-900">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'products' && <Products />}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}