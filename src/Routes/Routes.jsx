import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home/Home";
import ToyDetails from "../Pages/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/AllToys/AllToys";
import AddAToy from "../Pages/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";

import Blog from "../Pages/Blog";
import Error from "../Pages/Error/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-side-ochre.vercel.app/toy/${params.id}`
          ),
        //     loader: async ({ params }) =>
        //       await fetch(`http://localhost:5000/toy/${params.id}`),
      },
      {
        path: "/allToys",
        element: <AllToys />,
      },
      {
        path: "addAToy",
        element: (
          <PrivateRoute>
            <AddAToy />
          </PrivateRoute>
        ),
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "blogs",
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
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default routes;
