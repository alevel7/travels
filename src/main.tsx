import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home/Home.tsx';
import Hotels from './pages/hotels/Hotels.tsx';
import Activity from './pages/activities/Activity.tsx';
import Flights from './pages/flights/flights.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "hotels",
        element: <Hotels />,
      },
      {
        path: "flights",
        element: <Flights />,
      },
      {
        path: "study",
        element: <Activity />,
      },
      {
        path: "visa",
        element: <Activity />,
      },
      {
        path: "immigration",
        element: <Activity />,
      },
      {
        path: "medical",
        element: <Activity />,
      },
      {
        path: "vacation",
        element: <Activity />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
