import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs";
import Home from "../components/Home";
import Root from "../components/Root";
import Statistics from "../components/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
