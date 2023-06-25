import React from "react";
import { Outlet } from "react-router-dom";
import Slider from "../components/common/slider";
import { aboutTeam } from "../content/aboutTeam";
import Breadcrumb from "../components/ui/breadcrumb";

const MainLayout = () => {
  return (
    <>
      <Slider sliders={aboutTeam} />
      <Breadcrumb />
      <Outlet />
    </>
  );
};

export default MainLayout;
