import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./Home/Home";
import Dest from "./Destination/Dest";
import Crew from "./Crew/Crew";
import Technology from "./Technology/Technology";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Destination",
    element: <Dest />
  },
  {
    path: "/Crew",
    element: <Crew />
  },
  {
    path: "/Technology",
    element: <Technology />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)