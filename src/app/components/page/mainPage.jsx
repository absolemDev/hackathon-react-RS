import React from "react";
import Slider from "../common/slider";
import { aboutTeam } from "../../content/aboutTeam";
import UserCard from "../ui/userCard";
import SocialLink from "../common/socialLink";
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
            <UserCard label={member.name} age={member.age} src={member.photo} />

            {/* Кнопка добавления в избранное для тестирования */}
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

      <p className="text-light mt-5">Пример использования SocialLink</p>
      <div className="my-3 w-25 d-flex justify-content-around align-items-center">
        <SocialLink nick="Diomidos" name="github" width="75px" />
        <SocialLink nick="Diomidos" name="telegram" width="75px" />
        <SocialLink nick="Diomidos" name="vk" width="75px" />
      </div>
    </>
  );
};

export default MainPage;
