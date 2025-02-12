import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import {
  About,
  Landing,
  HomeLayout,
  Cocktail,
  Error,
  NewsLetter,
} from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App
