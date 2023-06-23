import React from "react";
import Btn from "../component/btn";

const MainLayout = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <>
      <h2>Main Layout</h2>
      <Btn label={"кнопка"} onClick={handleClick} color={0} />
    </>
  );
};

export default MainLayout;
