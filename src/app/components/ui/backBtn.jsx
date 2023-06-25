import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../common/btn";

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <Btn color="secondary" onClick={() => navigate(-1)}>
      <i className="bi bi-caret-left-fill"></i>
      Назад
    </Btn>
  );
};

export default BackBtn;
