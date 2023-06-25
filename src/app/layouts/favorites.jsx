import React from "react";
import { Outlet } from "react-router-dom";
import BackBtn from "../components/ui/backBtn";

const FavoritesLayout = () => {
  return (
    <>
      <BackBtn />
      <Outlet />
    </>
  );
};

export default FavoritesLayout;
