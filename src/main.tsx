import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home/Home.tsx';
import Hotels from './pages/hotels/Hotels.tsx';
import Activity from './pages/activities/Activity.tsx';
import Flights from './pages/flights/Flights.tsx';
import Study from './pages/study/Study.tsx';
import Visa from './pages/visa/Visa.tsx';
import Immigration from './pages/immigration/Immigration.tsx';
import Medical from './pages/medical/Medical.tsx';
import Vacation from './pages/vacation/Vacation.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "activities",
        element: <Activity />,
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
        element: <Study />,
      },
      {
        path: "visa",
        element: <Visa />,
      },
      {
        path: "immigration",
        element: <Immigration />,
      },
      {
        path: "medical",
        element: <Medical />,
      },
      {
        path: "vacation",
        element: <Vacation />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
