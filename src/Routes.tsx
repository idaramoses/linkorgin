import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import HomeScreen from "pages/HomeScreen";
import Signup from "pages/Signup";
import Register from "pages/Register";
import LoginPage from "pages/Login";
import Dashboard from "pages/Dashboard";
import Category from "pages/Dashboard/Category";
import Govenment from "pages/Dashboard/Govenment";
import Welcomescreen from "pages/Welcomescreen";
import AIseachpagegovernment from "pages/AIseachpagegovernment";
import AIseachpagegovernmentOne from "pages/AIseachpagegovernmentOne";
import AIseachpagegovernmentTwo from "pages/AIseachpagegovernmentTwo";
import GovernmentPage from "pages/Dashboard/Govenment";
import CommunityPage from "pages/Dashboard/Community";
import EducationPage from "pages/Dashboard/Education";
import HealthCarePage from "pages/Dashboard/HealthCare";
import ImigrationPage from "pages/Dashboard/Immigration";
import CulturalPage from "pages/Dashboard/Cultural";


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
    {
      path: "/dashboard/category",
      element: <Category />,
    },
    {
      path: "/dashboard/category/government",
      element: <GovernmentPage />,
    },
    {
      path: "/dashboard/category/community",
      element: <CommunityPage />,
    },
    {
      path: "/dashboard/category/educational",
      element: <EducationPage />,
    },
    {
      path: "/dashboard/category/healthcare",
      element: <HealthCarePage />,
    },
    {
      path: "/dashboard/category/immigration",
      element: <ImigrationPage />,
    },
    {
      path: "/dashboard/category/cultural",
      element: <CulturalPage />,
    },
    {
      path: "welcomescreen",
      element: <Welcomescreen />,
    },
    {
      path: "aiseachpagegovernment",
      element: <AIseachpagegovernment />,
    },
    {
      path: "aiseachpagegovernmentone",
      element: <AIseachpagegovernmentOne />,
    },
    {
      path: "aiseachpagegovernmenttwo",
      element: <AIseachpagegovernmentTwo />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
