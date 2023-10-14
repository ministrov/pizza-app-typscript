import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Menu/Layout.tsx';
import Menu from './pages/Menu/Menu.tsx';
import Cart from './pages/Cart/Cart.tsx';
import Product from './pages/Product/Product.tsx';
import Error from './pages/Error/Error.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Menu />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/product/:id',
        element: <Product />
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
