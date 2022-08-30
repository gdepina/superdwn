import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserSettings } from './components/Profile/UserSettings';

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<div>Productos</div>} />
    <Route path="/cart" element={<div>Carrito</div>} />
    <Route exact path="/profile" element={<UserSettings />} />
  </Routes>
);

export default MainRouter;
