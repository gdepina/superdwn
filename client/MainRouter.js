import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import { ProductList, ProductDetail } from './components/Products';

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<div>Productos</div>} />
    <Route path="/cart" element={<div>Carrito</div>} />
    <Route path="/register" element={<Register />} />
    <Route path="/products" element={<ProductList />} />
    <Route path="/products/:id" element={<ProductDetail />} />
  </Routes>
);

export default MainRouter;
