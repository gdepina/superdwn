import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<Menu />} />
  </Routes>
);

export default MainRouter;
