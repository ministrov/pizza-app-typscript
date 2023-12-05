import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Menu/Layout.tsx';
// import Menu from './pages/Menu/Menu.tsx';
import Cart from './pages/Cart/Cart.tsx';
import Product from './pages/Product/Product.tsx';
import Error from './pages/Error/Error.tsx';
import './index.css';
import { PREFIX } from './helpers/API.ts';
import axios from 'axios';
import AuthLayout from './layout/Auth/AuthLayout.tsx';
import Login from './pages/Login/Login.tsx';
import Register from './pages/Register/Register.tsx';
import { RequireAuth } from './helpers/RequireAuth.tsx';
import { store } from './store/store.ts';
import Success from './pages/Success/Success.tsx';

// eslint-disable-next-line react-refresh/only-export-components
const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RequireAuth><Layout /></RequireAuth>,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<>Loading....</>}><Menu /></Suspense>
      },
      {
        path: '/success',
        element: <Success />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/product/:id',
        element: <Product />,
        errorElement: <>Error</>,
        loader: async ({ params }) => {
          // await new Promise<void>((resolve) => {
          //   setTimeout(() => {
          //     resolve();
          //   }, 2000);
          // });
          const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
          return data; 
        }
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
