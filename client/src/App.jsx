import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='App'>
      <Header />
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
      <Footer />
    </div>
  )
}

