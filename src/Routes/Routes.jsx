import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/Toys/AddToy/AddToy";
import AllToys from "../pages/Toys/AllToys/AllToys";
import Details from "../pages/Toys/AllToys/Details";
import MyToys from "../pages/Toys/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";

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
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/allToys"),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allToys/${params.id}`),
      },
      {
        path: "myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
