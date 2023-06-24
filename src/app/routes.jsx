import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/main";
import MainPage from "./components/page/mainPage";
import FavoritesPage from "./components/page/favoritesPage";
import UserPage from "./components/ui/userPage";

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
    path: "members",
    element: <UserPage />,
    children: [{ path: ":nick", element: <UserPage /> }]
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
];

export default routes;
