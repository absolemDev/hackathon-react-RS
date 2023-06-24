import React from "react";
import PropTypes from "prop-types";
import Btn from "../common/btn";
import { useNavigate } from "react-router-dom";

const UserCard = ({ label, age, src, desk, nick }) => {
  const navigate = useNavigate();

  const handleClick = ({ nick }) => {
    navigate(`/members/${nick}`);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={src} className="card-img-top" alt="user image" />
      <div className="card-body">
        <h5 className="card-title">{nick}</h5>
        <h5 className="card-title">{label}</h5>
        <h6 className="card-title">{`Возраст: ${age} лет`}</h6>
        <div className="card-text">{desk}</div>
      </div>
      <Btn label={"Открыть"} color={"primary"} onClick={handleClick} />
      <div className="card-body"></div>
    </div>
  );
};

UserCard.propTypes = {
  label: PropTypes.string,
  age: PropTypes.number,
  src: PropTypes.string,
  desk: PropTypes.string,
  nick: PropTypes.string
};

export default UserCard;
