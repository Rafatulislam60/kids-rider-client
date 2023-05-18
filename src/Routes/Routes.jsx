import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      }
    ],
  },
]);

export default router;
