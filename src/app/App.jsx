import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const elements = useRoutes(routes());
  return (
    <>
      <h1>HACKATHON REACT</h1>
      {elements}
    </>
  );
}

export default App;
