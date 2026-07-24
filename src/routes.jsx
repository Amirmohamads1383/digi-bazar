import { createBrowserRouter } from "react-router";
import Layouts from "./components/Layouts/Layouts";
import Home from "./Page/Home/Home";
import SingleProduct from "./Page/SingleProduct/SingleProduct";
import NotFound from "./Page/NotFound/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
