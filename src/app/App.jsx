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
    <>
      <header>
        <h1 className="text-center text-light py-2">Hackathon React</h1>
        <NavBar />
      </header>
      <main className="bg-dark py-5">
        <div className="content-container mx-auto">{elements}</div>
      </main>
      <footer>
        <p className="text-light">
          Junior Fronted Developer. 8 поток. 82 группа. Team 1
        </p>
      </footer>
    </>
  );
}

export default App;
