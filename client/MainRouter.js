import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import { ProductList, ProductDetail } from './components/Products';
import Cart from './cart';

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<div>Home</div>} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/register" element={<Register />} />
    <Route path="/products" element={<ProductList />} />
    <Route path="/products/:id" element={<ProductDetail />} />
  </Routes>
);

export default MainRouter;
