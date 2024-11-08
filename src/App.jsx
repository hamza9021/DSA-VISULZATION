import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home, Array, BubbleSort} from "./Components";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/array",
    element: <Array />,
  },{
    path: "/array/sort/bubble",
    element: <BubbleSort />,
  }
 
]);

function App() {
  return <RouterProvider router={appRouter} />;
}
export default App;
