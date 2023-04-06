import Dashboard from "../layouts/dashboard/Dashboard";
import NotFound from "../pages/404/NotFound";
import AddNote from "../pages/add/Add";
import Details from "../pages/details/Details";
import EditNote from "../pages/edit/Edit";
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
        loader: ({ params }) => {
          if (isNaN(params.id))
            throw new Response("Bad", {
              statusText: "You must write digit not letter",
              status: 404,
            });
        },
      },
      {
        path: "note/details/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
