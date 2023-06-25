import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTeam, getTeamLoadingStatus } from "../../store/team";
import UserCard from "../ui/userCard";
import localStorageService from "../../services/localStorage.service";
import Btn from "../common/btn";

const FavoritesPage = () => {
  const team = useSelector(getTeam());
  const isLoading = useSelector(getTeamLoadingStatus());
  const [isUpdated, setUpdated] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      const filteredTeam = team.filter((member) =>
        (localStorageService.getFavorites() || []).includes(member.nick)
      );
      setFavorites(filteredTeam);
      setUpdated(false);
    }
  }, [isUpdated, isLoading]);

  const handleRemoveFavorite = (nick) => {
    localStorageService.removeFavorite(nick);
    setUpdated(true);
  };

  if (isLoading) return "Loading...";

  return (
    <div className="flex-fill h-100">
      {favorites.length > 0 ? (
        <ul className="cards-container">
          {favorites.map((member) => (
            <li key={member.nick} className="m-4">
              <UserCard {...member} />
              <div className="mt-3 d-flex justify-content-center">
                <Btn
                  color="danger"
                  onClick={() => handleRemoveFavorite(member.nick)}
                  label="Убрать из избранных"
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="h-100 d-flex justify-content-center align-items-center">
          <h3 className="text-light">Список избранных пуст</h3>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
