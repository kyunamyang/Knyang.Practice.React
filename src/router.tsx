import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import { Code, Home } from 'domains';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/common' element={<Code />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
