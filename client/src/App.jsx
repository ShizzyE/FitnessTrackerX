import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <hr />
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
      <Footer />
    </div>
  )
}

