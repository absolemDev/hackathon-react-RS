import React from "react";
import Slider from "../common/slider";
import { aboutTeam } from "../../content/aboutTeam";

const MainPage = () => {
  return (
    <>
      <Slider sliders={aboutTeam} />
    </>
  );
};

export default MainPage;
