import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Body from './Components/Body/Body';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import ErrorPage from './Components/ErrorPage';
import RestaurantDetail from './Components/RestaurantDetail';
import LoginPage from './Components/LoginPage';
import './index.css';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Body /> },
      { path: 'aboutUs', element: <AboutUs /> },
      { path: 'contactUs', element: <ContactUs /> },
      { path: 'restaurant/:id', element: <RestaurantDetail /> },
      { path: 'restaurant', element: <RestaurantDetail /> },
      { path: 'login', element: <LoginPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
);
