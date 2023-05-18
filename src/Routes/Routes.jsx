import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";

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
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ],
  },
]);

export default router;
