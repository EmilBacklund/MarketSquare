import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/views/HomePage';
import ProductDetailsPage from '../components/views/ProductDetailsPage';
import CartCheckOutPage from '../components/views/CartCheckOutPage';
import ContactPage from '../components/views/ContactPage';
import NotFOund from '../components/views/NotFound';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartCheckOutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFOund />} />
      </Routes>
    </>
  );
}

export default Router;
