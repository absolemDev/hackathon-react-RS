import React from "react";
import Slider from "../common/slider";
import { aboutTeam } from "../../content/aboutTeam";
import UserCard from "../ui/userCard";
import SocialLink from "../common/socialLink";

const MainPage = () => {
  return (
    <>
      <Slider sliders={aboutTeam} />
      <UserCard
        label={"Привозин Руслан"}
        age={35}
        src={"https://avatars.githubusercontent.com/u/95099849?v=4"}
        desk={"Люблю кодить"}
      />

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
