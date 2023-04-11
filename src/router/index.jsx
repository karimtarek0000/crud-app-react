import { noteParamHandler } from "../guard/validations";
import Auth from "../layouts/auth/Auth";
import Dashboard from "../layouts/dashboard/Dashboard";
import LogIn from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Index from "../pages/index/Index";
import { lazyLoadRoutes } from "./lazy";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: lazyLoadRoutes("pages/404", "NotFound"),
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "note/add",
        element: lazyLoadRoutes("pages/add", "AddNote"),
      },
      {
        path: "note/edit/:id",
        element: lazyLoadRoutes("pages/edit", "EditNote"),
        loader: noteParamHandler,
      },
      {
        path: "note/:id",
        element: lazyLoadRoutes("pages/details", "Details"),
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <LogIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
