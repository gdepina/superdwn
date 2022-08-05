import React from 'react';
import { Route, Routes } from 'react-router-dom';

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<div>Productos</div>} />
    <Route path="/cart" element={<div>Carrito</div>} />
  </Routes>
);

export default MainRouter;
