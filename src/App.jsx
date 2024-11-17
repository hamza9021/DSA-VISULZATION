import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Array,
  BubbleSort,
  SelectionSort,
  InsertionSort,
  LinearSearch,
  BinarySearch,
  LinkedList,
  Queue,
  Stack,
  Tree,
} from "./Components";

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
    path: "/array/sort/selection",
    element: <SelectionSort />,
  },
  {
    path: "/array/search/linear",
    element: <LinearSearch />,
  },
  {
    path: "/array/sort/insertion",
    element: <InsertionSort />,
  },
  {
    path: "/array/search/binary",
    element: <BinarySearch />,
  },
  {
    path: "/linkedlist",
    element: <LinkedList />,
  },
  {
    path: "/queue",
    element: <Queue />,
  },
  {
    path: "/stack",
    element: <Stack />,
  },
  {
    path: "/tree",
    element: <Tree />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}
export default App;
