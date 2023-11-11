import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { App } from './components/App';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
