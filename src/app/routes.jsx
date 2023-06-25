import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/main";
import MainPage from "./components/page/mainPage";
import FavoritesPage from "./components/page/favoritesPage";
import MemberPage from "./components/page/memberPage";
import FavoritesLayout from "./layouts/favorites";

const routes = () => [
  {
    path: "",
    element: <MainLayout />,
    children: [
      { path: "", element: <MainPage /> },
      {
        path: "members",
        children: [
          { path: "", element: <MainPage /> },
          { path: ":nick", element: <MemberPage /> }
        ]
      }
    ]
  },
  {
    path: "favorites",
    element: <FavoritesLayout />,
    children: [
      { path: "", element: <FavoritesPage /> },
      { path: "*", element: <Navigate to="/favorites" /> }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
];

export default routes;
