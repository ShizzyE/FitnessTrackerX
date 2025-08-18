import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home.jsx';
import LoginPage from './pages/Login.jsx';
import AboutPage from './pages/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: '404 Not Found',
    children: [
      { index: true, element: <HomePage />},
      { path: 'about', element: <AboutPage />},
      { path: 'home', element: <HomePage />},
      { path: 'login', element: <LoginPage />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
