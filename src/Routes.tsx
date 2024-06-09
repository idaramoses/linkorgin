import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import HomeScreen from "pages/HomeScreen";
import Signup from "pages/Signup";
import Register from "pages/Register";
import LoginPage from "pages/Login";
import Dashboard from "pages/Dashboard";
import Category from "pages/Dashboard/Category";
import Welcomescreen from "pages/Welcomescreen";
import AIseachpagegovernment from "pages/AIseachpagegovernment";
import AIseachpagegovernmentOne from "pages/AIseachpagegovernmentOne";
import AIseachpagegovernmentTwo from "pages/AIseachpagegovernmentTwo";
import EducationPage from "pages/Dashboard/Education";
import HealthCarePage from "pages/Dashboard/HealthCare";
import ImigrationPage from "pages/Dashboard/Immigration";
import CulturalPage from "pages/Dashboard/Cultural";
import ProfilePage from "pages/Profile";
import GovernmentPage from "pages/Dashboard/Govenment";
import CommunityPage from "pages/Dashboard/Community";
import InvestmentPage from "pages/Dashboard/Investment";
import FinancePage from "pages/Dashboard/Finance";
import SocialPage from "pages/Dashboard/Social";
import Mathcategory from "pages/Matching/locals/CategoryPage";
import MatchingWelcome from "pages/Matching/newCommers/Intro";
import SuccessScreen from "pages/Matching/locals/sucessPage";
import MatchingNewComersPage from "pages/Matching/newCommers";
import MatchingLocalsPage from "pages/Matching/locals";
import LocalRegisterPage from "pages/Matching/locals/CategoryPage";


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
      path: "/dashboard/category/social",
      element: <SocialPage />,
    },
    {
      path: "/dashboard/category/finance",
      element: <FinancePage />,
    },
    {
      path: "/dashboard/category/investment",
      element: <InvestmentPage />,
    },
    {
      path: "welcomescreen",
      element: <Welcomescreen />,
    },
    {
      path: "profile",
      element: <ProfilePage />,
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
    {
      path: "/matching/locals",
      element: <MatchingLocalsPage />,
    },
    {
      path: "/matching/new-comer",
      element: <MatchingNewComersPage />,
    },
    
    {
      path: "/matching/locals/register",
      element: <LocalRegisterPage />,
    },
    {
      path: "/matching/new-comer/register",
      element: <Mathcategory />,
    },
    {
      path: "/success",
      element: <SuccessScreen />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
