import { noteParamHandler } from "../guard/validations";
import Dashboard from "../layouts/dashboard/Dashboard";
import NotFound from "../pages/404/NotFound";
import AddNote from "../pages/add/AddNote";
import Details from "../pages/details/Details";
import EditNote from "../pages/edit/EditNote";
import Index from "../pages/index/Index";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "note/add",
        element: <AddNote />,
      },
      {
        path: "note/edit/:id",
        element: <EditNote />,
        loader: noteParamHandler,
      },
      {
        path: "note/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
