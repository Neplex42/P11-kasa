import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, createRoutesFromElements, Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";
import About from "./routes/About.jsx";
import Logements from "./routes/Logements.jsx";
import Error from "./pages/error/Error.jsx";
import Layout from "./pages/Layout.jsx";

import './styles/main.scss'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Root />} errorElement={<Error />} />
      <Route path="about" element={<About />} errorElement={<Error />} />
      <Route path="logements/:logementsId" element={<Logements />} errorElement={<Error />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
