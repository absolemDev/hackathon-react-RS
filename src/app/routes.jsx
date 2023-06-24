import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/main";
import MainPage from "./components/page/mainPage";
import FavoritesPage from "./components/page/favoritesPage";

const routes = (isLoggedIn, location) => [
  {
    path: "",
    element: <MainLayout />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "favorites", element: <FavoritesPage /> }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
];

export default routes;
