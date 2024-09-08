import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateTripPage } from "./routes/create-trip";
import { TripDetailsPage } from "./routes/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage/>,
  },
  {
    path: "/trips/:tripsId",
    element: <TripDetailsPage/>,
  },
]);

export function App() {
  return <RouterProvider router={router} />
}

// 2 - 15:36