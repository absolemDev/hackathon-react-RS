import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/main";

const routes = (isLoggedIn, location) => [
  { path: "", element: <MainLayout /> },
  {
    path: "*",
    element: <Navigate to="/" />
  }
];

export default routes;
