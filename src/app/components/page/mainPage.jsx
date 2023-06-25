import React from "react";
import UserCard from "../ui/userCard";
import { useSelector } from "react-redux";
import { getTeam } from "../../store/team";
import Btn from "../common/btn";
import localStorageService from "../../services/localStorage.service";

const MainPage = () => {
  const team = useSelector(getTeam());
  if (!team) return "Loading...";
  return (
    <>
      <div className="cards-container">
        {team.map((member) => (
          <div key={member.nick} className="m-4">
            <UserCard {...member} />

            <div className="mt-3 d-flex justify-content-center">
              <Btn
                color="primary"
                onClick={() => localStorageService.setFavorite(member.nick)}
                label="В избранные"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainPage;
