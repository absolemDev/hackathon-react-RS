import React from "react";
import UserCard from "../components/userCard";

const MainLayout = () => {
  return (
    <>
      <h2>Main Layout</h2>
      <UserCard
        label={"Привозин Руслан"}
        age={35}
        src={"https://avatars.githubusercontent.com/u/95099849?v=4"}
        desk={"Не ебите мозги "}
      />
    </>
  );
};

export default MainLayout;
