import ErrorPage from "@/pages/error-page/page";
import HomePage from "@/pages/homepage/page";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
]);

export default router;