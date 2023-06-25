import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="d-flex flex-column h-100">
      <header className="py-3">
        <h1 className="text-center text-light">Hackathon React</h1>
      </header>
      <main className="bg-dark flex-fill">
        <Outlet />
      </main>
      <footer className="ps-3 py-2 d-flex align-items-center">
        <p className="text-light mb-0">
          Junior Fronted Developer. 8 поток. 82 группа. Team 1
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
