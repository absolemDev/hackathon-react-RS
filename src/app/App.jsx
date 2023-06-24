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
      <NavBar />
      {elements}
    </>
  );
}

export default App;
