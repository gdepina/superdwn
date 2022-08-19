import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<div>Productos</div>} />
    <Route path="/cart" element={<div>Carrito</div>} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

export default MainRouter;
