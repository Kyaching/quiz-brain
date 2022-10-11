import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Questions from "../components/Questions";
import Root from "../components/Root";
import Statistics from "../components/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/questions/:quizId",
        loader: async ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
          ),
        element: <Questions></Questions>,
      },
    ],
  },
]);

export default router;
