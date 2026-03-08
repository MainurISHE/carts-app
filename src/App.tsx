import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartDetailsPage from './pages/CartDetailsPage/CartDetalisPage'
import CartsPage from './pages/CartsPage/CartsPage'
import UserPage from './pages/UserPage/UserPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CartsPage />} />
          <Route path='/carts/:id' element={<CartDetailsPage />} />
          <Route path='/users/:id' element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
