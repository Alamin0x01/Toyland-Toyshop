import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Toys from "../pages/Toys/Toys";
import Blog from "../pages/Blog/Blog";
import SignIn from "../pages/Signin/SignIn";
import SignUp from "../pages/Signup/SignUp";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys/AddToys";
import Error from "../pages/Error/Error";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details/Details";
import UpdateToy from "../pages/UpdateToy/UpdateToy";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "toys",
        element: <Toys />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "mytoys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "addtoy",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(
            `https://fan-vault-toys-server.vercel.app/toy/${params?.id}`
          ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <UpdateToy />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(
            `https://fan-vault-toys-server.vercel.app/toy/${params?.id}`
          ),
      },
    ],
  },
]);

export default routes;
