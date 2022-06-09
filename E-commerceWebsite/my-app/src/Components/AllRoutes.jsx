import React from 'react'
import {Routes, Route} from "react-router-dom"
import Cart from '../Pages/Cart'
import Homepage from '../Pages/Homepage'
import Product from '../Pages/Product'
import Products from '../Pages/Products'

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}
