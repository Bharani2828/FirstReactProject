import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Pages/NavBar'
import {Home} from './Pages/Home'
import {Cart} from './Pages/Cart'
import { ShopcontextProvider } from './Context/shop-context'

export default function App() {
  return (
    <div>
      <ShopcontextProvider>
      <BrowserRouter>
      <NavBar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
       </Routes>
      </BrowserRouter>
      </ShopcontextProvider>
      
    </div>
  )
}
