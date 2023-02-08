import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import TitleContext from './context/TitleContext';
import Header from './Components/Header';
import Body from './Components/Body/Body';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import ErrorPage from './Components/ErrorPage';
import LoginPage from './Components/LoginPage';
import Profile from './Components/Profile';
import useOnline from './hooks/useOnline';
import Faq from './Components/FAQ/Faq';

import './index.css';

const RestaurantDetail = lazy(() => import('./Components/RestaurantDetail'));

const AppLayout = () => {
  const isOnline = useOnline();
  const [title, setTitle] = useState('Food Nation');
  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      <Header />
      {isOnline ? (
        <Outlet />
      ) : (
        <h2>
          🔴 Oops you seems to offline, please check your internet connection.{' '}
        </h2>
      )}
    </TitleContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Body /> },
      {
        path: 'aboutUs',
        element: <AboutUs />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
      { path: 'contactUs', element: <ContactUs /> },
      {
        path: 'restaurant/:id',
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <RestaurantDetail />
          </Suspense>
        ),
      },
      { path: 'login', element: <LoginPage /> },
      { path: 'faq', element: <Faq /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
