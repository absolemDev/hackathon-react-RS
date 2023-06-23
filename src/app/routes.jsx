import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/main";
import MainPage from "./components/page/mainPage";

const routes = (isLoggedIn, location) => [
  {
    path: "",
    element: <MainLayout />,
    children: [{ path: "", element: <MainPage /> }]
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
];

export default routes;
