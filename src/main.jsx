import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Shop from './Shop.jsx'
import About from './About.jsx'
import Login from './Login.jsx'
import './index.css' 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },   {
    path: "/home",
    element: <App/>,
  },  {
    path: "/Shop",
    element: <Shop/>,
  },  {
    path: "/ABOUT",
    element: <About/>,
  },  {
    path: "/BELIEVERS",
    element: <App/>,
  },{
    path: "/CONTACTS",
    element: <App/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
