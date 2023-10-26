import { useState } from 'react'
import Products from './components/Products'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';
function App() {
  
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<RootLayout />}>
    <Route index element={<Dashboard />} />
    <Route path='/cart' element={<Cart/>} />
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
