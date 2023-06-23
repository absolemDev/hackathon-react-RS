import React from "react";
import ProgressBar from "../component/progressBar";

const MainLayout = () => {
  return (
    <>
      <h2>Main Layout</h2>
      <ProgressBar label={"html"} percent={10} />
    </>
  );
};

export default MainLayout;
