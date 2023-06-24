import React from "react";
import UserCard from "../components/userCard";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="d-flex flex-column h-100">
      <header className="py-3">
        <h1 className="text-center text-light">Hackathon React</h1>
        <h2 className="text-center text-light">
          Junior Fronted Developer. 8 поток. 82 группа. Team 1
        </h2>
      </header>
      <main className="bg-dark flex-fill">
        <Outlet />
      <UserCard
        label={"Привозин Руслан"}
        age={35}
        src={"https://avatars.githubusercontent.com/u/95099849?v=4"}
        desk={"Люблю кодить"}
      />
      </main>
    </div>
  );
};

export default MainLayout;
