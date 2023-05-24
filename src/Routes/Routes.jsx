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
import UpdateToy from "../pages/Toys/MyToys/UpdateToy";
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
        element: <AllToys></AllToys>
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://y-liart-alpha.vercel.app/allToys/${params.id}`),
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
        loader: () => fetch("https://y-liart-alpha.vercel.app/toy"),
      },
      {
        path: "myToys/updateToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`https://y-liart-alpha.vercel.app/myToys/updateToy/${params.id}`),
      },
      {
        path: "addToy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
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
