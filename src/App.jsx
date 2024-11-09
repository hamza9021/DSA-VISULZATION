import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Array, BubbleSort, LinearSearch, BinarySearch } from "./Components";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/array",
    element: <Array />,
  },
  {
    path: "/array/sort/bubble",
    element: <BubbleSort />,
  },
  {
    path: "/array/search/linear",
    element: <LinearSearch />,
  },
  {
    path: "/array/search/binary",
    element: <BinarySearch />,
  }
]);

function App() {
  return <RouterProvider router={appRouter} />;
}
export default App;
