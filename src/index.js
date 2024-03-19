import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "./Routes/About/About";
import Contact from "./Routes/Contact/Contact";
import Home from "./Routes/Home/Home";
import ErrorPage from './Routes/ErrorPage/ErrorPage';
import Clients from './Routes/Clients/Clients';
import Work from './Routes/Work/Work';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about/team",
        element: <About />
      },
      {
        path: "/about/clients",
        element: <Clients />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/services",
        element: <Work />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
