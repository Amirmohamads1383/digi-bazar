import { createBrowserRouter } from "react-router";
import Layouts from "./components/Layouts/Layouts"
import Home from "./Page/Home/Home"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;