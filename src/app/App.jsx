import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useDispatch } from "react-redux";
import { loadTeamList } from "./store/team";

function App() {
  const elements = useRoutes(routes());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTeamList());
  }, []);

  return <>{elements}</>;
}

export default App;
