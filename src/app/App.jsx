import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useDispatch } from "react-redux";
import { loadTeamList } from "./store/team";
import NavBar from "./components/ui/navbar";

function App() {
  const elements = useRoutes(routes());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTeamList());
  }, []);

  return (
    <div className="d-flex flex-column h-100">
      <header>
        <h1 className="text-center text-light py-2">Hackathon React</h1>
        <NavBar />
      </header>
      <main className="bg-dark py-5 flex-grow-1">
        <div className="content-container mx-auto">{elements}</div>
      </main>
      <footer className="bg-black d-flex p-1 align-items-center">
        <img
          src="https://result.school/_next/static/media/main-logo-black.85858284.svg"
          alt="ResultSchool"
          className="me-auto"
        />
        <p className="text-white-50 m-0">
          Junior Fronted Developer. 8 поток. 82 группа. Team 1
        </p>
      </footer>
    </div>
  );
}

export default App;
