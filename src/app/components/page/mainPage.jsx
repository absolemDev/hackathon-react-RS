import React from "react";
import Slider from "../common/slider";
import { aboutTeam } from "../../content/aboutTeam";
import UserCard from "../ui/userCard";

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
    </>
  );
};

export default MainPage;
