import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import HomeScreen from "pages/HomeScreen";
import Signup from "pages/Signup";
import Register from "pages/Register";
import LoginPage from "pages/Login";
import Dashboard from "pages/Dashboard";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomeScreen /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/homescreen",
      element: <HomeScreen />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "auth/login",
      element: <LoginPage />,
    },
    {
      path: "/auth/register",
      element: <Register />,
    },
    {
      path: "/dashboard/welcome",
      element: <Dashboard />,
    },
  
  ]);

  return element;
};

export default ProjectRoutes;
