import React from "react";
import Slider from "../common/slider";
import { aboutTeam } from "../../content/aboutTeam";
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
      <Slider sliders={aboutTeam} />
      <ul className="cards-container">
        {team.map((member) => (
          <li key={member.nick} className="m-4">
            <UserCard {...member} />

            <div className="mt-3 d-flex justify-content-center">
              <Btn
                color="primary"
                onClick={() => localStorageService.setFavorite(member.nick)}
                label="В избранные"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainPage;
