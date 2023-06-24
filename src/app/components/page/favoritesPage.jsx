import React from "react";
import { useSelector } from "react-redux";
import { getTeam } from "../../store/team";
import UserCard from "../ui/userCard";
import localStorageService from "../../services/localStorage.service";
import Btn from "../common/btn";

const FavoritesPage = () => {
  const team = useSelector(getTeam());
  if (!team) return "Loading...";

  const filteredTeam = team.filter((member) =>
    localStorageService.getFavorites().includes(member.nick)
  );

  const handleRemoveFavorite = (nick) => {
    localStorageService.removeFavorite(nick);
  };

  return (
    <div className="d-flex flex-column h-100">
      <header className="py-3">
        <h1 className="text-center text-light">Избранные</h1>
      </header>
      <main className="bg-dark flex-fill">
        <ul className="cards-container">
          {filteredTeam.map((member) => (
            <li key={member.nick} className="m-4">
              <UserCard
                nick={member.nick}
                label={member.name}
                age={member.age}
                src={member.photo}
              />

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
      </main>
    </div>
  );
};

export default FavoritesPage;
